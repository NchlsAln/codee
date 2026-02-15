export interface Session {
  id: string;
  projectPath?: string;
  conversationId?: string;
  createdAt: number;
  updatedAt: number;
}

export interface UserRequest {
  sessionId: string;
  prompt: string;
  task: "chat" | "explain" | "generate-tests" | "refactor" | "complete";
  languageId?: string;
  filePath?: string;
  selection?: string;
  projectPath?: string;
}

export interface StreamChunk {
  type: "text" | "code" | "metadata";
  content: string;
}

export interface StreamResponse {
  id: string;
  abortController: AbortController;
  onChunk: (handler: (chunk: StreamChunk) => void) => void;
  onComplete: (handler: () => void) => void;
  onError: (handler: (error: Error) => void) => void;
}

export interface ICodeeEngine {
  initialize(options?: { projectPath?: string }): Promise<void>;
  createSession(projectPath?: string): Promise<Session>;
  processRequest(request: UserRequest): Promise<StreamResponse>;
  switchModel(modelId: string): Promise<void>;
  applyRuntimeOverrides(overrides: Partial<import("../config/types").CodeeConfig>): Promise<void>;
  clearLocalData(): Promise<void>;
  startIndexingNow(projectPath?: string): Promise<void>;
  getPerformanceMetrics(): Array<import("../perf/PerformanceMonitor").PerformanceMetric>;
}

export type EngineErrorCategory = "network" | "model" | "parse" | "config" | "unknown";

export interface EngineUserError {
  category: EngineErrorCategory;
  message: string;
  suggestion?: string;
}

export type EngineEvent =
  | { type: "engine.ready" }
  | { type: "engine.request"; requestId: string; sessionId: string }
  | { type: "engine.status"; status: "indexing" | "model-loading" | "ready" | "error"; message?: string }
  | { type: "engine.progress"; operation: "indexing" | "embedding"; current: number; total: number }
  | { type: "engine.error"; error: Error; userError?: EngineUserError }
  | { type: "engine.config"; message: string }
  | { type: "engine.debug"; requestId: string; context: string; tokenCount: number; modelId: string };

export type EngineLogLevel = "debug" | "info" | "warn" | "error";

export interface EngineLogEntry {
  level: EngineLogLevel;
  message: string;
  timestamp: number;
  data?: Record<string, unknown>;
}

export interface EngineTelemetryEvent {
  name: string;
  timestamp: number;
  properties?: Record<string, string | number | boolean>;
}
