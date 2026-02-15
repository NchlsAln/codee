import { EventEmitter } from "events";
import { randomUUID } from "crypto";
import { access } from "fs/promises";
import {
  EngineEvent,
  EngineLogEntry,
  EngineTelemetryEvent,
  EngineUserError,
  ICodeeEngine,
  Session,
  StreamChunk,
  StreamResponse,
  UserRequest
} from "./types";
import { SessionManager } from "./SessionManager";
import { ContextBuilder } from "./ContextBuilder";
import { ModelRouter } from "../llm/ModelRouter";
import { LanguageRegistry, registerDefaultLanguages } from "@codee/languages";
import { CodeGenerator } from "../code/CodeGenerator";
import { CodeValidator } from "../code/CodeValidator";
import { ConversationStore } from "../memory/ConversationStore";
import { CodeContextAssembler } from "../memory/CodeContextAssembler";
import { ProjectIndex } from "../memory/ProjectIndex";
import { SmartCompression } from "../memory/SmartCompression";
import { OllamaEmbeddingProvider, VectorMemory } from "../memory/VectorMemory";
import { SettingsManager } from "../config/SettingsManager";
import { CodeeConfig } from "../config/types";
import { EngineError, toUserError } from "./errors";
import { Diagnostic } from "@codee/languages";
import { PerformanceMonitor } from "../perf/PerformanceMonitor";

export class CodeeEngine extends EventEmitter implements ICodeeEngine {
  private static instance?: CodeeEngine;
  private readonly sessionManager: SessionManager;
  private readonly contextBuilder: ContextBuilder;
  private readonly modelRouter: ModelRouter;
  private readonly languageRegistry: LanguageRegistry;
  private readonly codeGenerator: CodeGenerator;
  private readonly codeValidator: CodeValidator;
  private readonly conversationStore: ConversationStore;
  private readonly projectIndex: ProjectIndex;
  private readonly vectorMemory: VectorMemory;
  private readonly embeddingProvider: OllamaEmbeddingProvider;
  private readonly contextAssembler: CodeContextAssembler;
  private readonly performance: PerformanceMonitor;
  private settingsManager?: SettingsManager;
  private activeConfig?: CodeeConfig;
  private activeProjectPath?: string;
  private indexAbortController?: AbortController;
  private telemetryEnabled = false;
  private developerMode = false;
  private maxIndexFiles = 20000;
  private indexingPromise?: Promise<void>;
  private indexingTimer?: NodeJS.Timeout;
  private indexingIdleDelayMs = 1500;
  private indexingInProgress = false;
  private pendingPriorityPaths = new Set<string>();
  private languageServerCleanupTimer?: NodeJS.Timeout;
  private languageServerIdleMs = 300000;

  private constructor() {
    super();
    this.sessionManager = new SessionManager();
    this.languageRegistry = new LanguageRegistry();
    registerDefaultLanguages(this.languageRegistry);
    this.conversationStore = new ConversationStore();
    this.projectIndex = new ProjectIndex();
    this.embeddingProvider = new OllamaEmbeddingProvider("http://localhost:11434", "nomic-embed-text");
    this.vectorMemory = new VectorMemory(this.embeddingProvider, this.projectIndex);
    this.contextAssembler = new CodeContextAssembler(
      this.projectIndex,
      this.vectorMemory,
      this.conversationStore.getMemory(),
      new SmartCompression()
    );
    this.contextBuilder = new ContextBuilder(this.languageRegistry, this.contextAssembler, this.conversationStore);
    this.modelRouter = new ModelRouter();
    this.codeGenerator = new CodeGenerator(this.languageRegistry);
    this.codeValidator = new CodeValidator();
    this.performance = new PerformanceMonitor();
  }

  static getInstance(): CodeeEngine {
    if (!CodeeEngine.instance) {
      CodeeEngine.instance = new CodeeEngine();
    }
    return CodeeEngine.instance;
  }

  async initialize(options?: { projectPath?: string }): Promise<void> {
    try {
      const stopColdStart = this.performance.startSpan("engine.coldStart");
      this.activeProjectPath = options?.projectPath;
      this.settingsManager = new SettingsManager({ projectPath: this.activeProjectPath });
      this.settingsManager.watch(() => void this.reloadConfig());
      await this.reloadConfig();

      await this.conversationStore.initialize();
      await this.vectorMemory.initialize();
      this.emitEvent({ type: "engine.status", status: "model-loading", message: "Loading models." });
      const stopModelLoad = this.performance.startSpan("engine.modelLoad");
      if (process.env.NODE_ENV !== "test" && process.env.CODEE_SKIP_MODEL_INIT !== "1") {
        await this.modelRouter.initialize();
      }
      stopModelLoad();

      if (this.activeProjectPath) {
        await this.prepareProject(this.activeProjectPath);
        this.scheduleIndexing(this.activeProjectPath, "idle");
      }

      this.emitEvent({ type: "engine.ready" });
      this.emitEvent({ type: "engine.status", status: "ready", message: "Engine ready." });
      this.performance.recordMemory("engine.memory.ready");
      stopColdStart();
    } catch (error) {
      this.handleError(error);
      throw error;
    }
  }

  async createSession(projectPath?: string): Promise<Session> {
    const session = this.sessionManager.createSession(projectPath);
    await this.conversationStore.persistSession(session);
    if (projectPath && projectPath !== this.activeProjectPath) {
      await this.prepareProject(projectPath);
      this.scheduleIndexing(projectPath, "idle");
    }
    return session;
  }

  async processRequest(request: UserRequest): Promise<StreamResponse> {
    const requestId = randomUUID();
    this.emitEvent({ type: "engine.request", requestId, sessionId: request.sessionId });
    const stopFirstToken = this.performance.startSpan("engine.firstToken", {
      requestId,
      task: request.task
    });
    let firstTokenObserved = false;

    const abortController = new AbortController();
    const handlers = {
      chunk: [] as Array<(chunk: StreamChunk) => void>,
      complete: [] as Array<() => void>,
      error: [] as Array<(error: Error) => void>
    };
    const pendingChunks: StreamChunk[] = [];
    let completed = false;
    let terminalError: Error | null = null;

    const response: StreamResponse = {
      id: requestId,
      abortController,
      onChunk: (handler) => {
        handlers.chunk.push(handler);
        if (pendingChunks.length > 0) {
          pendingChunks.splice(0).forEach((chunk) => handler(chunk));
        }
      },
      onComplete: (handler) => {
        handlers.complete.push(handler);
        if (completed) {
          handler();
        }
      },
      onError: (handler) => {
        handlers.error.push(handler);
        if (terminalError) {
          handler(terminalError);
        }
      }
    };

    void this.conversationStore.addMessage(request.sessionId, "user", request.prompt);

    void this.handleRequest(request, abortController, requestId)
      .then(async (stream) => {
        let assistantBuffer = "";
        for await (const chunk of stream) {
          if (!firstTokenObserved) {
            stopFirstToken();
            firstTokenObserved = true;
          }
          if (handlers.chunk.length > 0) {
            handlers.chunk.forEach((handler) => handler(chunk));
          } else {
            pendingChunks.push(chunk);
          }
          if (chunk.type === "text" || chunk.type === "code") {
            assistantBuffer += chunk.content;
          }
        }
        if (assistantBuffer.trim().length > 0) {
          void this.conversationStore.addMessage(request.sessionId, "assistant", assistantBuffer);
        }
        completed = true;
        handlers.complete.forEach((handler) => handler());
      })
      .catch((error) => {
        if (!firstTokenObserved) {
          stopFirstToken();
        }
        terminalError = error;
        handlers.error.forEach((handler) => handler(error));
        this.handleError(error);
      });

    return response;
  }

  async switchModel(modelId: string): Promise<void> {
    await this.modelRouter.setActiveModel(modelId);
  }

  async applyRuntimeOverrides(overrides: Partial<CodeeConfig>): Promise<void> {
    if (!this.settingsManager) {
      this.settingsManager = new SettingsManager({ projectPath: this.activeProjectPath });
      this.settingsManager.watch(() => void this.reloadConfig());
    }
    this.settingsManager.setRuntimeOverrides(overrides);
    await this.reloadConfig();
  }

  async clearLocalData(): Promise<void> {
    this.indexAbortController?.abort();
    await this.projectIndex.stopWatching();
    await this.conversationStore.clearStorage();
    this.vectorMemory.clear();
    this.emitEvent({ type: "engine.status", status: "ready", message: "Local data cleared." });
  }

  async startIndexingNow(projectPath?: string): Promise<void> {
    const target = projectPath ?? this.activeProjectPath;
    if (!target) {
      return;
    }
    await this.prepareProject(target);
    await this.startIndexing(target);
  }

  getPerformanceMetrics(): Array<import("../perf/PerformanceMonitor").PerformanceMetric> {
    return this.performance.snapshot();
  }

  enableTelemetry(enabled: boolean): void {
    this.telemetryEnabled = enabled;
  }

  private async handleRequest(
    request: UserRequest,
    abortController: AbortController,
    requestId: string
  ): Promise<AsyncIterable<StreamChunk>> {
    const projectPath = request.projectPath ?? this.activeProjectPath;
    if (projectPath && projectPath !== this.activeProjectPath) {
      await this.prepareProject(projectPath);
      this.scheduleIndexing(projectPath, "idle");
    }

    const priorityPaths = [request.filePath].filter((value): value is string => Boolean(value));
    await this.ensureIndexing(priorityPaths);

    const languageDefinition = request.languageId
      ? this.languageRegistry.getLanguage(request.languageId)
      : this.languageRegistry.detectLanguage(request.filePath ?? "");

    const diagnostics = await this.collectDiagnostics(projectPath ?? "", languageDefinition?.id);

    const config = this.activeConfig;
    if (!config) {
      throw new EngineError("config", "Settings have not been loaded yet.");
    }

    const stopContext = this.performance.startSpan("engine.context.build", { requestId });
    const context = await this.contextBuilder.build({
      request,
      languageId: languageDefinition?.id,
      tokenLimit: config.advanced.contextWindowTokens,
      abortSignal: abortController.signal,
      diagnostics,
      config,
      conversationId: this.conversationStore.getConversationId(request.sessionId)
    });
    stopContext();

    const modelSelection = this.modelRouter.selectModel(request.task, languageDefinition?.id ?? "unknown");

    if (this.developerMode) {
      const tokenCount = Math.ceil(context.length / 4);
      this.emitEvent({
        type: "engine.debug",
        requestId,
        context,
        tokenCount,
        modelId: modelSelection.modelId
      });
    }

    const generator = this.codeGenerator.createStrategy(request.task, languageDefinition?.id ?? "unknown");
    const systemPrompt = this.codeGenerator.buildSystemPrompt(
      languageDefinition?.id,
      "You are a helpful coding assistant."
    );

    const stream = generator.generate({
      model: modelSelection,
      request,
      context,
      systemPrompt,
      abortSignal: abortController.signal
    });

    return this.codeValidator.validateStream(stream, languageDefinition?.id ?? "unknown");
  }

  private emitEvent(event: EngineEvent): void {
    this.emit("event", event);
  }

  private async reloadConfig(): Promise<void> {
    if (!this.settingsManager) {
      return;
    }
    const config = await this.settingsManager.resolve();
    await this.validateConfig(config);
    this.activeConfig = config;
    this.modelRouter.applyConfig(config);
    if (config.core.modelEndpoint) {
      this.embeddingProvider.setEndpoint(config.core.modelEndpoint);
    }
    if (config.core.embeddingModelId) {
      this.embeddingProvider.setModelId(config.core.embeddingModelId);
    }
    this.vectorMemory.setEmbeddingCacheLimit(config.advanced.embeddingCacheMaxEntries);
    this.indexingIdleDelayMs = config.advanced.indexingIdleDelayMs;
    this.languageServerIdleMs = config.advanced.languageServerIdleMs;
    this.conversationStore.setRetentionDays(config.privacy.dataRetentionDays);
    this.performance.setEnabled(config.advanced.performanceMetricsEnabled);
    this.telemetryEnabled = config.privacy.telemetryEnabled;
    this.developerMode = config.advanced.developerMode;
    this.maxIndexFiles = config.advanced.maxIndexFiles;
    this.emitEvent({ type: "engine.config", message: "Configuration applied." });
  }

  private async validateConfig(config: CodeeConfig): Promise<void> {
    if (config.privacy.offlineMode && config.core.cloudFallback) {
      throw new EngineError(
        "config",
        "Offline mode blocks cloud fallback.",
        "Disable offline mode or turn off cloud fallback."
      );
    }

    if (config.core.modelEndpoint && !isLocalEndpoint(config.core.modelEndpoint)) {
      if (config.privacy.offlineMode) {
        throw new EngineError(
          "config",
          "Offline mode requires a localhost model endpoint.",
          "Use a localhost endpoint or disable offline mode."
        );
      }
      if (!config.core.cloudFallback) {
        throw new EngineError(
          "config",
          "Cloud endpoints require cloud fallback to be enabled.",
          "Enable codee.core.cloudFallback or use localhost."
        );
      }
      if (requiresPinning(config.core.modelEndpoint, config.core.pinnedCertificates)) {
        throw new EngineError(
          "config",
          "Certificate pinning required for the configured endpoint.",
          "Set codee.core.pinnedCertificates for this host."
        );
      }
    }

    if (config.core.modelPath) {
      try {
        await access(config.core.modelPath);
      } catch {
        throw new EngineError(
          "config",
          `Model path not found: ${config.core.modelPath}`,
          "Update core.modelPath or remove it."
        );
      }
    }

    for (const [languageId, lspPath] of Object.entries(config.languages.lspPaths)) {
      if (!lspPath) {
        continue;
      }
      try {
        await access(lspPath);
      } catch {
        throw new EngineError(
          "config",
          `LSP path for ${languageId} not found: ${lspPath}`,
          "Update languages.lspPaths or remove the entry."
        );
      }
    }

    const adapter = this.modelRouter.getActiveAdapter();
    if (config.core.modelEndpoint && adapter.setEndpoint) {
      adapter.setEndpoint(config.core.modelEndpoint);
    }
    const skipModelValidation = process.env.NODE_ENV === "test" || process.env.CODEE_SKIP_MODEL_VALIDATION === "1";
    if (!skipModelValidation && adapter.listModels) {
      const models = await adapter.listModels();
      const requiredModels = [
        config.core.modelId,
        config.core.chatModelId,
        config.core.codeModelId,
        config.core.embeddingModelId
      ].filter((value): value is string => Boolean(value && value.length > 0));
      for (const modelId of requiredModels) {
        if (!models.includes(modelId)) {
          throw new EngineError(
            "model",
            `Model ${modelId} is not available.`,
            "Run `ollama pull <model>` or update the model settings."
          );
        }
      }
    }
  }

  private async prepareProject(projectPath: string): Promise<void> {
    if (!this.settingsManager || this.activeProjectPath !== projectPath) {
      this.settingsManager?.dispose();
      this.settingsManager = new SettingsManager({ projectPath });
      this.settingsManager.watch(() => void this.reloadConfig());
      await this.reloadConfig();
    }

    this.activeProjectPath = projectPath;
    await this.conversationStore.setProjectPath(projectPath);
    this.indexAbortController?.abort();
    this.indexAbortController = new AbortController();

    this.projectIndex.removeAllListeners();
    this.projectIndex.on("index.progress", (payload: { current: number; total: number }) => {
      this.emitEvent({
        type: "engine.progress",
        operation: "indexing",
        current: payload.current,
        total: payload.total
      });
    });
    this.projectIndex.on("file.changed", async (payload: { filePath: string }) => {
      const content = await this.projectIndex.getFileContent(payload.filePath);
      await this.vectorMemory.indexFile(payload.filePath, content, this.indexAbortController?.signal);
    });
    this.projectIndex.on("file.removed", (payload: { filePath: string }) => {
      this.vectorMemory.removeFile(payload.filePath);
    });
  }

  private scheduleIndexing(projectPath: string, reason: "idle" | "request"): void {
    if (process.env.CODEE_DISABLE_INDEXING === "1" || process.env.NODE_ENV === "test") {
      return;
    }
    if (this.indexingInProgress || this.indexingPromise) {
      return;
    }
    if (this.indexingTimer) {
      clearTimeout(this.indexingTimer);
    }
    const delay = reason === "idle" ? this.indexingIdleDelayMs : 0;
    this.indexingTimer = setTimeout(() => {
      void this.startIndexing(projectPath);
    }, delay);
  }

  private async ensureIndexing(priorityPaths: string[]): Promise<void> {
    if (!this.activeProjectPath) {
      return;
    }

    priorityPaths.forEach((path) => this.pendingPriorityPaths.add(path));
    if (priorityPaths.length > 0) {
      await this.indexPriorityFiles(priorityPaths);
    }

    if (!this.indexingPromise && !this.indexingInProgress) {
      this.scheduleIndexing(this.activeProjectPath, "request");
    }
  }

  private async startIndexing(projectPath: string): Promise<void> {
    if (process.env.CODEE_DISABLE_INDEXING === "1" || process.env.NODE_ENV === "test") {
      return;
    }
    if (this.indexingInProgress) {
      return;
    }

    this.indexingInProgress = true;
    this.indexingPromise = this.runIndexing(projectPath).finally(() => {
      this.indexingInProgress = false;
      this.indexingPromise = undefined;
      this.pendingPriorityPaths.clear();
    });
    await this.indexingPromise;
  }

  private async runIndexing(projectPath: string): Promise<void> {
    this.emitEvent({ type: "engine.status", status: "indexing", message: "Indexing project." });
    const stopIndexing = this.performance.startSpan("engine.indexing");
    const priorityPaths = Array.from(this.pendingPriorityPaths);

    try {
      await this.vectorMemory.indexProject(
        projectPath,
        (current, total) =>
          this.emitEvent({
            type: "engine.progress",
            operation: "embedding",
            current,
            total
          }),
        this.indexAbortController?.signal,
        priorityPaths,
        this.maxIndexFiles
      );
    } catch (error) {
      if (error instanceof Error && error.message.includes("exceeds limit")) {
        throw new EngineError(
          "config",
          "Project too large to index with current limits.",
          "Update advanced.maxIndexFiles or adjust exclude patterns."
        );
      }
      throw error;
    }

    this.projectIndex.watch(projectPath);
    this.vectorMemory.compact({ maxDocuments: 60000 });
    this.performance.recordMemory("engine.memory.afterIndex");
    stopIndexing();
    this.emitEvent({ type: "engine.status", status: "ready", message: "Indexing complete." });
  }

  private async indexPriorityFiles(priorityPaths: string[]): Promise<void> {
    if (!this.activeProjectPath) {
      return;
    }
    for (const filePath of priorityPaths) {
      try {
        await this.projectIndex.ensureFile(filePath);
        const content = await this.projectIndex.getFileContent(filePath);
        await this.vectorMemory.indexFile(filePath, content, this.indexAbortController?.signal);
      } catch {
        continue;
      }
    }
  }

  async warmLanguageServer(projectPath: string, languageId: string): Promise<void> {
    this.languageRegistry.getOrStartServer(projectPath, languageId);
  }

  private async collectDiagnostics(projectPath: string, languageId?: string): Promise<Diagnostic[]> {
    if (!languageId || !projectPath) {
      return [];
    }
    const activeServers = this.languageRegistry.listActiveServers(projectPath) as Array<{
      getLanguageId: () => string;
    }>;
    await Promise.all(
      activeServers
        .filter((server) => server.getLanguageId() !== languageId)
        .map((server) => this.languageRegistry.stopServer(projectPath, server.getLanguageId()))
    );
    const server = this.languageRegistry.getOrStartServer(projectPath, languageId);
    if (!server) {
      return [];
    }
    this.scheduleLanguageServerCleanup(projectPath);
    return server.getDiagnostics();
  }

  private scheduleLanguageServerCleanup(projectPath: string): void {
    if (this.languageServerIdleMs <= 0) {
      return;
    }
    if (this.languageServerCleanupTimer) {
      clearTimeout(this.languageServerCleanupTimer);
    }
    this.languageServerCleanupTimer = setTimeout(() => {
      const servers = this.languageRegistry.listActiveServers(projectPath) as Array<{ getLanguageId: () => string }>;
      void Promise.all(servers.map((server) => this.languageRegistry.stopServer(projectPath, server.getLanguageId())));
    }, this.languageServerIdleMs);
  }

  private handleError(error: unknown): void {
    const userError: EngineUserError = toUserError(error);
    const err = error instanceof Error ? error : new Error(String(error));
    this.emitEvent({ type: "engine.error", error: err, userError });
    this.emitEvent({ type: "engine.status", status: "error", message: userError.message });
  }

  log(entry: EngineLogEntry): void {
    this.emit("log", entry);
  }

  track(event: EngineTelemetryEvent): void {
    if (!this.telemetryEnabled) {
      return;
    }
    this.emit("telemetry", event);
  }
}

function isLocalEndpoint(endpoint: string): boolean {
  try {
    const url = new URL(endpoint);
    return ["localhost", "127.0.0.1", "::1"].includes(url.hostname);
  } catch {
    return false;
  }
}

function requiresPinning(endpoint: string, pins: Record<string, string[]>): boolean {
  try {
    const url = new URL(endpoint);
    if (url.protocol !== "https:") {
      return false;
    }
    const values = pins[url.hostname] ?? [];
    return values.length === 0;
  } catch {
    return false;
  }
}
