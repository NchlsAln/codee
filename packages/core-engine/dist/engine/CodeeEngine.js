"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeeEngine = void 0;
const events_1 = require("events");
const crypto_1 = require("crypto");
const promises_1 = require("fs/promises");
const SessionManager_1 = require("./SessionManager");
const ContextBuilder_1 = require("./ContextBuilder");
const ModelRouter_1 = require("../llm/ModelRouter");
const languages_1 = require("@codee/languages");
const CodeGenerator_1 = require("../code/CodeGenerator");
const CodeValidator_1 = require("../code/CodeValidator");
const ConversationStore_1 = require("../memory/ConversationStore");
const CodeContextAssembler_1 = require("../memory/CodeContextAssembler");
const ProjectIndex_1 = require("../memory/ProjectIndex");
const SmartCompression_1 = require("../memory/SmartCompression");
const VectorMemory_1 = require("../memory/VectorMemory");
const SettingsManager_1 = require("../config/SettingsManager");
const errors_1 = require("./errors");
const PerformanceMonitor_1 = require("../perf/PerformanceMonitor");
class CodeeEngine extends events_1.EventEmitter {
    static instance;
    sessionManager;
    contextBuilder;
    modelRouter;
    languageRegistry;
    codeGenerator;
    codeValidator;
    conversationStore;
    projectIndex;
    vectorMemory;
    embeddingProvider;
    contextAssembler;
    performance;
    settingsManager;
    activeConfig;
    activeProjectPath;
    indexAbortController;
    telemetryEnabled = false;
    developerMode = false;
    maxIndexFiles = 20000;
    indexingPromise;
    indexingTimer;
    indexingIdleDelayMs = 1500;
    indexingInProgress = false;
    pendingPriorityPaths = new Set();
    languageServerCleanupTimer;
    languageServerIdleMs = 300000;
    constructor() {
        super();
        this.sessionManager = new SessionManager_1.SessionManager();
        this.languageRegistry = new languages_1.LanguageRegistry();
        (0, languages_1.registerDefaultLanguages)(this.languageRegistry);
        this.conversationStore = new ConversationStore_1.ConversationStore();
        this.projectIndex = new ProjectIndex_1.ProjectIndex();
        this.embeddingProvider = new VectorMemory_1.OllamaEmbeddingProvider("http://localhost:11434", "nomic-embed-text");
        this.vectorMemory = new VectorMemory_1.VectorMemory(this.embeddingProvider, this.projectIndex);
        this.contextAssembler = new CodeContextAssembler_1.CodeContextAssembler(this.projectIndex, this.vectorMemory, this.conversationStore.getMemory(), new SmartCompression_1.SmartCompression());
        this.contextBuilder = new ContextBuilder_1.ContextBuilder(this.languageRegistry, this.contextAssembler, this.conversationStore);
        this.modelRouter = new ModelRouter_1.ModelRouter();
        this.codeGenerator = new CodeGenerator_1.CodeGenerator(this.languageRegistry);
        this.codeValidator = new CodeValidator_1.CodeValidator();
        this.performance = new PerformanceMonitor_1.PerformanceMonitor();
    }
    static getInstance() {
        if (!CodeeEngine.instance) {
            CodeeEngine.instance = new CodeeEngine();
        }
        return CodeeEngine.instance;
    }
    async initialize(options) {
        try {
            const stopColdStart = this.performance.startSpan("engine.coldStart");
            this.activeProjectPath = options?.projectPath;
            this.settingsManager = new SettingsManager_1.SettingsManager({ projectPath: this.activeProjectPath });
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
        }
        catch (error) {
            this.handleError(error);
            throw error;
        }
    }
    async createSession(projectPath) {
        const session = this.sessionManager.createSession(projectPath);
        await this.conversationStore.persistSession(session);
        if (projectPath && projectPath !== this.activeProjectPath) {
            await this.prepareProject(projectPath);
            this.scheduleIndexing(projectPath, "idle");
        }
        return session;
    }
    async processRequest(request) {
        const requestId = (0, crypto_1.randomUUID)();
        this.emitEvent({ type: "engine.request", requestId, sessionId: request.sessionId });
        const stopFirstToken = this.performance.startSpan("engine.firstToken", {
            requestId,
            task: request.task
        });
        let firstTokenObserved = false;
        const abortController = new AbortController();
        const handlers = {
            chunk: [],
            complete: [],
            error: []
        };
        const pendingChunks = [];
        let completed = false;
        let terminalError = null;
        const response = {
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
                }
                else {
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
    async switchModel(modelId) {
        await this.modelRouter.setActiveModel(modelId);
    }
    async applyRuntimeOverrides(overrides) {
        if (!this.settingsManager) {
            this.settingsManager = new SettingsManager_1.SettingsManager({ projectPath: this.activeProjectPath });
            this.settingsManager.watch(() => void this.reloadConfig());
        }
        this.settingsManager.setRuntimeOverrides(overrides);
        await this.reloadConfig();
    }
    async clearLocalData() {
        this.indexAbortController?.abort();
        await this.projectIndex.stopWatching();
        await this.conversationStore.clearStorage();
        this.vectorMemory.clear();
        this.emitEvent({ type: "engine.status", status: "ready", message: "Local data cleared." });
    }
    async startIndexingNow(projectPath) {
        const target = projectPath ?? this.activeProjectPath;
        if (!target) {
            return;
        }
        await this.prepareProject(target);
        await this.startIndexing(target);
    }
    getPerformanceMetrics() {
        return this.performance.snapshot();
    }
    enableTelemetry(enabled) {
        this.telemetryEnabled = enabled;
    }
    async handleRequest(request, abortController, requestId) {
        const projectPath = request.projectPath ?? this.activeProjectPath;
        if (projectPath && projectPath !== this.activeProjectPath) {
            await this.prepareProject(projectPath);
            this.scheduleIndexing(projectPath, "idle");
        }
        const priorityPaths = [request.filePath].filter((value) => Boolean(value));
        await this.ensureIndexing(priorityPaths);
        const languageDefinition = request.languageId
            ? this.languageRegistry.getLanguage(request.languageId)
            : this.languageRegistry.detectLanguage(request.filePath ?? "");
        const diagnostics = await this.collectDiagnostics(projectPath ?? "", languageDefinition?.id);
        const config = this.activeConfig;
        if (!config) {
            throw new errors_1.EngineError("config", "Settings have not been loaded yet.");
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
        const systemPrompt = this.codeGenerator.buildSystemPrompt(languageDefinition?.id, "You are a helpful coding assistant.");
        const stream = generator.generate({
            model: modelSelection,
            request,
            context,
            systemPrompt,
            abortSignal: abortController.signal
        });
        return this.codeValidator.validateStream(stream, languageDefinition?.id ?? "unknown");
    }
    emitEvent(event) {
        this.emit("event", event);
    }
    async reloadConfig() {
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
    async validateConfig(config) {
        if (config.privacy.offlineMode && config.core.cloudFallback) {
            throw new errors_1.EngineError("config", "Offline mode blocks cloud fallback.", "Disable offline mode or turn off cloud fallback.");
        }
        if (config.core.modelEndpoint && !isLocalEndpoint(config.core.modelEndpoint)) {
            if (config.privacy.offlineMode) {
                throw new errors_1.EngineError("config", "Offline mode requires a localhost model endpoint.", "Use a localhost endpoint or disable offline mode.");
            }
            if (!config.core.cloudFallback) {
                throw new errors_1.EngineError("config", "Cloud endpoints require cloud fallback to be enabled.", "Enable codee.core.cloudFallback or use localhost.");
            }
            if (requiresPinning(config.core.modelEndpoint, config.core.pinnedCertificates)) {
                throw new errors_1.EngineError("config", "Certificate pinning required for the configured endpoint.", "Set codee.core.pinnedCertificates for this host.");
            }
        }
        if (config.core.modelPath) {
            try {
                await (0, promises_1.access)(config.core.modelPath);
            }
            catch {
                throw new errors_1.EngineError("config", `Model path not found: ${config.core.modelPath}`, "Update core.modelPath or remove it.");
            }
        }
        for (const [languageId, lspPath] of Object.entries(config.languages.lspPaths)) {
            if (!lspPath) {
                continue;
            }
            try {
                await (0, promises_1.access)(lspPath);
            }
            catch {
                throw new errors_1.EngineError("config", `LSP path for ${languageId} not found: ${lspPath}`, "Update languages.lspPaths or remove the entry.");
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
            ].filter((value) => Boolean(value && value.length > 0));
            for (const modelId of requiredModels) {
                if (!models.includes(modelId)) {
                    throw new errors_1.EngineError("model", `Model ${modelId} is not available.`, "Run `ollama pull <model>` or update the model settings.");
                }
            }
        }
    }
    async prepareProject(projectPath) {
        if (!this.settingsManager || this.activeProjectPath !== projectPath) {
            this.settingsManager?.dispose();
            this.settingsManager = new SettingsManager_1.SettingsManager({ projectPath });
            this.settingsManager.watch(() => void this.reloadConfig());
            await this.reloadConfig();
        }
        this.activeProjectPath = projectPath;
        await this.conversationStore.setProjectPath(projectPath);
        this.indexAbortController?.abort();
        this.indexAbortController = new AbortController();
        this.projectIndex.removeAllListeners();
        this.projectIndex.on("index.progress", (payload) => {
            this.emitEvent({
                type: "engine.progress",
                operation: "indexing",
                current: payload.current,
                total: payload.total
            });
        });
        this.projectIndex.on("file.changed", async (payload) => {
            const content = await this.projectIndex.getFileContent(payload.filePath);
            await this.vectorMemory.indexFile(payload.filePath, content, this.indexAbortController?.signal);
        });
        this.projectIndex.on("file.removed", (payload) => {
            this.vectorMemory.removeFile(payload.filePath);
        });
    }
    scheduleIndexing(projectPath, reason) {
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
    async ensureIndexing(priorityPaths) {
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
    async startIndexing(projectPath) {
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
    async runIndexing(projectPath) {
        this.emitEvent({ type: "engine.status", status: "indexing", message: "Indexing project." });
        const stopIndexing = this.performance.startSpan("engine.indexing");
        const priorityPaths = Array.from(this.pendingPriorityPaths);
        try {
            await this.vectorMemory.indexProject(projectPath, (current, total) => this.emitEvent({
                type: "engine.progress",
                operation: "embedding",
                current,
                total
            }), this.indexAbortController?.signal, priorityPaths, this.maxIndexFiles);
        }
        catch (error) {
            if (error instanceof Error && error.message.includes("exceeds limit")) {
                throw new errors_1.EngineError("config", "Project too large to index with current limits.", "Update advanced.maxIndexFiles or adjust exclude patterns.");
            }
            throw error;
        }
        this.projectIndex.watch(projectPath);
        this.vectorMemory.compact({ maxDocuments: 60000 });
        this.performance.recordMemory("engine.memory.afterIndex");
        stopIndexing();
        this.emitEvent({ type: "engine.status", status: "ready", message: "Indexing complete." });
    }
    async indexPriorityFiles(priorityPaths) {
        if (!this.activeProjectPath) {
            return;
        }
        for (const filePath of priorityPaths) {
            try {
                await this.projectIndex.ensureFile(filePath);
                const content = await this.projectIndex.getFileContent(filePath);
                await this.vectorMemory.indexFile(filePath, content, this.indexAbortController?.signal);
            }
            catch {
                continue;
            }
        }
    }
    async warmLanguageServer(projectPath, languageId) {
        this.languageRegistry.getOrStartServer(projectPath, languageId);
    }
    async collectDiagnostics(projectPath, languageId) {
        if (!languageId || !projectPath) {
            return [];
        }
        const activeServers = this.languageRegistry.listActiveServers(projectPath);
        await Promise.all(activeServers
            .filter((server) => server.getLanguageId() !== languageId)
            .map((server) => this.languageRegistry.stopServer(projectPath, server.getLanguageId())));
        const server = this.languageRegistry.getOrStartServer(projectPath, languageId);
        if (!server) {
            return [];
        }
        this.scheduleLanguageServerCleanup(projectPath);
        return server.getDiagnostics();
    }
    scheduleLanguageServerCleanup(projectPath) {
        if (this.languageServerIdleMs <= 0) {
            return;
        }
        if (this.languageServerCleanupTimer) {
            clearTimeout(this.languageServerCleanupTimer);
        }
        this.languageServerCleanupTimer = setTimeout(() => {
            const servers = this.languageRegistry.listActiveServers(projectPath);
            void Promise.all(servers.map((server) => this.languageRegistry.stopServer(projectPath, server.getLanguageId())));
        }, this.languageServerIdleMs);
    }
    handleError(error) {
        const userError = (0, errors_1.toUserError)(error);
        const err = error instanceof Error ? error : new Error(String(error));
        this.emitEvent({ type: "engine.error", error: err, userError });
        this.emitEvent({ type: "engine.status", status: "error", message: userError.message });
    }
    log(entry) {
        this.emit("log", entry);
    }
    track(event) {
        if (!this.telemetryEnabled) {
            return;
        }
        this.emit("telemetry", event);
    }
}
exports.CodeeEngine = CodeeEngine;
function isLocalEndpoint(endpoint) {
    try {
        const url = new URL(endpoint);
        return ["localhost", "127.0.0.1", "::1"].includes(url.hostname);
    }
    catch {
        return false;
    }
}
function requiresPinning(endpoint, pins) {
    try {
        const url = new URL(endpoint);
        if (url.protocol !== "https:") {
            return false;
        }
        const values = pins[url.hostname] ?? [];
        return values.length === 0;
    }
    catch {
        return false;
    }
}
