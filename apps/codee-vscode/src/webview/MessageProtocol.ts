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

export interface PatternConcept {
  id: string;
  name: string;
  category: "concurrency" | "data-structures" | "control-flow" | "paradigms";
  description: string;
  tags: string[];
}

export interface PatternImplementation {
  language: string;
  description: string;
  snippet: string;
}

export type WebviewMessage =
  | { type: "sendMessage"; content: string; contextFiles: string[] }
  | { type: "stopGeneration" }
  | { type: "insertCode"; code: string; position?: "cursor" | "newFile" }
  | { type: "copyCode"; code: string }
  | { type: "openSettings" }
  | { type: "openPatternExplorer" }
  | { type: "requestPatternExplorerData" }
  | { type: "learnPattern"; conceptId: string }
  | {
      type: "translationFeedback";
      sourceLanguage: string;
      targetLanguage: string;
      sourceCode: string;
      targetCode: string;
      feedback: string;
    }
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
  | { type: "setTheme"; theme: "light" | "dark" | "high-contrast" }
  | {
      type: "patternExplorerData";
      concepts: PatternConcept[];
      implementations: Record<string, PatternImplementation[]>;
      learningQueue: string[];
    }
  | { type: "updateLearningQueue"; learningQueue: string[] }
  | { type: "showPatternExplorer"; selectedConceptId?: string; fromLanguage?: string; toLanguage?: string };
