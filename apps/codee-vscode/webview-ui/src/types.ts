export type MessageRole = "user" | "assistant" | "system" | "tool";

export interface ChatAttachment {
  id: string;
  name: string;
  path: string;
}

export interface ChatMessage {
  id: string;
  role: MessageRole;
  content: string;
  createdAt: number;
  attachments?: ChatAttachment[];
  threadId?: string;
  status?: "thinking" | "error" | "complete";
  codeBlocks?: CodeBlockData[];
}

export interface CodeBlockData {
  id: string;
  language: string;
  code: string;
  diff?: { before: string; after: string };
}

export type WebviewAction =
  | { type: "copy"; payload: { code: string } }
  | { type: "insert"; payload: { code: string } }
  | { type: "newFile"; payload: { code: string; language: string } };
