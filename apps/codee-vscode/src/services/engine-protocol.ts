export type EngineRequest =
  | StartSessionRequest
  | ChatMessageRequest
  | ExplainCodeRequest
  | GenerateTestsRequest
  | RefactorRequest
  | SwitchLanguageModeRequest;

export type EngineResponse =
  | StartSessionResponse
  | ChatMessageResponse
  | ExplainCodeResponse
  | GenerateTestsResponse
  | RefactorResponse
  | SwitchLanguageModeResponse
  | ErrorResponse;

export type EngineEvent = ChatMessageEvent | ChatStreamEvent | EngineStatusEvent;

export interface EngineEnvelope<T> {
  id: string;
  type: string;
  payload: T;
  timestamp: number;
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
  createdAt: number;
  threadId?: string;
}

export interface StartSessionRequest {
  type: "session.start";
}

export interface StartSessionResponse {
  type: "session.started";
  sessionId: string;
}

export interface ChatMessageRequest {
  type: "chat.send";
  sessionId: string | null;
  message: ChatMessage;
}

export interface ChatMessageResponse {
  type: "chat.sent";
  messageId: string;
}

export interface ExplainCodeRequest {
  type: "code.explain";
  languageId: string;
  content: string;
}

export interface ExplainCodeResponse {
  type: "code.explain.result";
  summary: string;
}

export interface GenerateTestsRequest {
  type: "code.tests";
  languageId: string;
  content: string;
}

export interface GenerateTestsResponse {
  type: "code.tests.result";
  tests: string;
}

export interface RefactorRequest {
  type: "code.refactor";
  languageId: string;
  content: string;
}

export interface RefactorResponse {
  type: "code.refactor.result";
  suggestion: string;
}

export interface SwitchLanguageModeRequest {
  type: "language.switch";
  languageId: string;
}

export interface SwitchLanguageModeResponse {
  type: "language.switch.result";
  languageId: string;
}

export interface ErrorResponse {
  type: "error";
  message: string;
  code?: string;
}

export interface ChatMessageEvent {
  type: "chat.message";
  message: ChatMessage;
}

export interface ChatStreamEvent {
  type: "chat.chunk";
  messageId: string;
  chunk: string;
}

export interface EngineStatusEvent {
  type: "engine.status";
  status: "connected" | "disconnected" | "degraded";
  model: string;
}
