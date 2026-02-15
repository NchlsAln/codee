export interface ConversationSummary {
  id: string;
  title: string;
  updatedAt: number;
  messageCount: number;
  lastMessage?: string;
}

export interface ContextFile {
  path: string;
  label: string;
  kind: "file" | "symbol";
  pinned?: boolean;
  icon?: string;
  detail?: string;
}

export type WebviewMessage =
  | { type: "sendMessage"; content: string; contextFiles: string[] }
  | { type: "stopGeneration" }
  | { type: "insertCode"; code: string; position?: "cursor" | "newFile" }
  | { type: "copyCode"; code: string }
  | { type: "openSettings" }
  | { type: "loadConversation"; id: string }
  | { type: "deleteConversation"; id: string }
  | { type: "attachFile"; path: string };

export type ExtensionMessage =
  | { type: "streamStart"; messageId: string }
  | { type: "streamChunk"; messageId: string; chunk: string }
  | { type: "streamEnd"; messageId: string }
  | { type: "streamError"; messageId: string; error: string }
  | { type: "updateConversations"; conversations: ConversationSummary[] }
  | { type: "updateContext"; files: ContextFile[]; tokenCount: number }
  | { type: "setTheme"; theme: "light" | "dark" | "high-contrast" };
