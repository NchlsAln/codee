export type RequestId = string;

export interface CorrelatedMessage {
  id: RequestId;
  timestamp: number;
}

export interface AttachmentRef {
  path: string;
  label: string;
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
  createdAt: number;
  threadId?: string;
}

export type WebviewToExtensionMessage =
  | ChatSendMessage
  | ChatCancelMessage
  | ContextAddFileMessage
  | ContextRemoveFileMessage
  | ContextClearMessage;

export interface ChatSendMessage extends CorrelatedMessage {
  type: "chat.send";
  text: string;
  attachments?: AttachmentRef[];
}

export interface ChatCancelMessage extends CorrelatedMessage {
  type: "chat.cancel";
  requestId: RequestId;
}

export interface ContextAddFileMessage extends CorrelatedMessage {
  type: "context.addFile";
  path: string;
}

export interface ContextRemoveFileMessage extends CorrelatedMessage {
  type: "context.removeFile";
  path: string;
}

export interface ContextClearMessage extends CorrelatedMessage {
  type: "context.clear";
}

export type ExtensionToWebviewMessage =
  | ChatMessageEvent
  | ChatStreamEvent
  | ChatSystemEvent
  | ChatSessionEvent
  | EngineStatusEvent
  | EngineErrorEvent
  | ContextAttachmentsEvent;

export interface ChatMessageEvent {
  type: "chat.message";
  message: ChatMessage;
}

export interface ChatStreamEvent {
  type: "chat.stream";
  requestId: RequestId;
  messageId: string;
  chunk: string;
  done?: boolean;
}

export interface ChatSystemEvent {
  type: "chat.system";
  text: string;
}

export interface ChatSessionEvent {
  type: "chat.session";
  sessionId: string;
}

export interface EngineStatusEvent {
  type: "engine.status";
  status: "initializing" | "ready" | "error" | "indexing" | "model-loading";
  message?: string;
  model?: string;
}

export interface EngineErrorEvent {
  type: "engine.error";
  message: string;
  suggestion?: string;
}

export interface ContextAttachmentsEvent {
  type: "context.attachments";
  attachments: AttachmentRef[];
}

export interface EngineHostEvent {
  type: "engine.status" | "engine.error";
  status?: EngineStatusEvent;
  error?: EngineErrorEvent;
}
