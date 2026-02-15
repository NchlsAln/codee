import * as vscode from "vscode";
import {
  CodeeConfig,
  CodeeEngine,
  EngineEvent as CoreEngineEvent,
  EngineUserError,
  MultiFileRefactor,
  RefactorResult,
  TestGenerator,
  TestSuiteResult,
  UserRequest
} from "@codee/core-engine";
import { EngineHostEvent } from "./MessageProtocol";

export class EngineHost implements vscode.Disposable {
  private static instance?: EngineHost;
  private readonly engine: CodeeEngine;
  private readonly eventEmitter = new vscode.EventEmitter<EngineHostEvent>();
  private initialized = false;
  private lastStatus: EngineHostEvent | null = null;
  private disposables: vscode.Disposable[] = [];
  private readonly output = vscode.window.createOutputChannel("Codee Engine");
  private lastDebugState: { requestId: string; context: string; tokenCount: number; modelId: string } | null = null;

  private constructor() {
    this.engine = CodeeEngine.getInstance();
  }

  static getInstance(): EngineHost {
    if (!EngineHost.instance) {
      EngineHost.instance = new EngineHost();
    }
    return EngineHost.instance;
  }

  onEvent(handler: (event: EngineHostEvent) => void): vscode.Disposable {
    return this.eventEmitter.event(handler);
  }

  getLastStatus(): EngineHostEvent | null {
    return this.lastStatus;
  }

  getDebugState(): { requestId: string; context: string; tokenCount: number; modelId: string } | null {
    return this.lastDebugState;
  }

  showLogs(): void {
    this.output.show(true);
  }

  async initialize(projectPath?: string): Promise<void> {
    if (this.initialized) {
      return;
    }
    this.initialized = true;
    this.engine.on("event", (event: CoreEngineEvent) => this.handleEngineEvent(event));
    try {
      this.eventEmitter.fire({
        type: "engine.status",
        status: { type: "engine.status", status: "initializing", message: "Starting engine." }
      });
      await this.engine.initialize({ projectPath });
    } catch (error) {
      this.handleEngineError(error, "Engine failed to initialize.");
    }
  }

  async restart(projectPath?: string): Promise<void> {
    this.initialized = false;
    await this.initialize(projectPath);
  }

  async startIndexingNow(projectPath?: string): Promise<void> {
    await this.engine.startIndexingNow(projectPath);
  }

  getPerformanceMetrics(): Array<import("@codee/core-engine").PerformanceMetric> {
    return this.engine.getPerformanceMetrics();
  }

  async warmLanguageServer(projectPath: string, languageId: string): Promise<void> {
    await this.engine.warmLanguageServer(projectPath, languageId);
  }

  async startSession(projectPath?: string): Promise<string> {
    const session = await this.engine.createSession(projectPath);
    return session.id;
  }

  async processRequest(request: UserRequest): Promise<ReturnType<CodeeEngine["processRequest"]>> {
    return this.engine.processRequest(request);
  }

  async applyRuntimeConfig(config: CodeeConfig): Promise<void> {
    await this.engine.applyRuntimeOverrides(config);
    const statusEvent: EngineHostEvent = {
      type: "engine.status",
      status: {
        type: "engine.status",
        status: "ready",
        model: config.core.modelId,
        message: "Settings applied."
      }
    };
    this.lastStatus = statusEvent;
    this.eventEmitter.fire(statusEvent);
  }

  async clearLocalData(): Promise<void> {
    await this.engine.clearLocalData();
  }

  async generateTests(source: string, languageId: string, fileName?: string): Promise<TestSuiteResult> {
    const generator = new TestGenerator();
    return generator.generate({
      source,
      language: languageId === "python" ? "python" : "typescript",
      framework: languageId === "python" ? "pytest" : "jest",
      fileName
    });
  }

  async refactorSelection(options: {
    projectPath: string;
    sourceFile: string;
    selectionStart: number;
    selectionEnd: number;
    exportName: string;
    newFile: string;
  }): Promise<RefactorResult> {
    const refactor = new MultiFileRefactor(options.projectPath);
    return refactor.extractToNewFile({
      sourceFile: options.sourceFile,
      selectionStart: options.selectionStart,
      selectionEnd: options.selectionEnd,
      newFile: options.newFile,
      exportName: options.exportName
    });
  }

  async applyRefactor(projectPath: string, result: RefactorResult): Promise<void> {
    const refactor = new MultiFileRefactor(projectPath);
    await refactor.applyChangeSet(result.changeSet, true);
  }

  dispose(): void {
    this.eventEmitter.dispose();
    this.disposables.forEach((disposable) => disposable.dispose());
    this.disposables = [];
    this.output.dispose();
    this.engine.removeAllListeners();
    EngineHost.instance = undefined;
  }

  private handleEngineEvent(event: CoreEngineEvent): void {
    this.output.appendLine(`[${new Date().toISOString()}] ${event.type}`);
    if (event.type === "engine.status") {
      const statusEvent: EngineHostEvent = {
        type: "engine.status",
        status: {
          type: "engine.status",
          status: event.status,
          message: event.message
        }
      };
      this.lastStatus = statusEvent;
      this.eventEmitter.fire(statusEvent);
      return;
    }

    if (event.type === "engine.error") {
      this.initialized = false;
      const errorEvent: EngineHostEvent = {
        type: "engine.error",
        error: {
          type: "engine.error",
          message: event.userError?.message ?? event.error.message,
          suggestion: event.userError?.suggestion
        }
      };
      this.lastStatus = errorEvent;
      this.eventEmitter.fire(errorEvent);
      this.output.appendLine(event.userError?.message ?? event.error.message);
      return;
    }

    if (event.type === "engine.debug") {
      this.lastDebugState = {
        requestId: event.requestId,
        context: event.context,
        tokenCount: event.tokenCount,
        modelId: event.modelId
      };
    }
  }

  private handleEngineError(error: unknown, fallbackMessage: string): void {
    this.initialized = false;
    const userError = error instanceof Error ? error.message : fallbackMessage;
    const event: EngineHostEvent = {
      type: "engine.error",
      error: {
        type: "engine.error",
        message: userError,
        suggestion: this.getSuggestion(error)
      }
    };
    this.lastStatus = event;
    this.eventEmitter.fire(event);
  }

  private getSuggestion(error: unknown): string | undefined {
    const userError = error as EngineUserError | undefined;
    return userError?.suggestion;
  }
}
