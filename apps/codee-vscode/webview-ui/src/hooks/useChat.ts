import { useCallback, useEffect, useMemo, useState } from "react";
import { ChatAttachment, ChatMessage, WebviewAction } from "../types";
import { getVSCodeApi } from "../utils/vscode";
import { useStreaming } from "./useStreaming";
import {
  ContextFile,
  ConversationSummary,
  ExtensionMessage,
  WebviewMessage,
  PatternConcept,
  PatternImplementation
} from "../protocol";

const vscode = getVSCodeApi();

type WebviewState = {
  messages: ChatMessage[];
  attachments: ChatAttachment[];
  conversations: ConversationSummary[];
  contextFiles: ContextFile[];
  tokenCount: number;
  activeConversationId?: string;
  conversationMap?: Record<string, ChatMessage[]>;
  activeView?: "chat" | "pattern-explorer";
  patternConcepts?: PatternConcept[];
  patternImplementations?: Record<string, PatternImplementation[]>;
  learningQueue?: string[];
  selectedConceptId?: string;
  selectedFromLanguage?: string;
  selectedToLanguage?: string;
};

export const useChat = () => {
  const saved = vscode.getState() as WebviewState | undefined;
  const [messages, setMessages] = useState<ChatMessage[]>(saved?.messages ?? []);
  const [input, setInput] = useState("");
  const [attachments, setAttachments] = useState<ChatAttachment[]>(saved?.attachments ?? []);
  const [contextFiles, setContextFiles] = useState<ContextFile[]>(saved?.contextFiles ?? []);
  const [tokenCount, setTokenCount] = useState(saved?.tokenCount ?? 0);
  const [conversations, setConversations] = useState<ConversationSummary[]>(saved?.conversations ?? []);
  const [activeConversationId, setActiveConversationId] = useState<string | undefined>(saved?.activeConversationId);
  const [conversationMap, setConversationMap] = useState<Record<string, ChatMessage[]>>(saved?.conversationMap ?? {});
  const [activeView, setActiveView] = useState<"chat" | "pattern-explorer">(
    saved?.activeView ?? initialViewFromLocation()
  );
  const [patternConcepts, setPatternConcepts] = useState<PatternConcept[]>(saved?.patternConcepts ?? []);
  const [patternImplementations, setPatternImplementations] = useState<Record<string, PatternImplementation[]>>(
    saved?.patternImplementations ?? {}
  );
  const [learningQueue, setLearningQueue] = useState<string[]>(saved?.learningQueue ?? []);
  const [selectedConceptId, setSelectedConceptId] = useState<string | undefined>(saved?.selectedConceptId);
  const [selectedFromLanguage, setSelectedFromLanguage] = useState<string | undefined>(saved?.selectedFromLanguage);
  const [selectedToLanguage, setSelectedToLanguage] = useState<string | undefined>(saved?.selectedToLanguage);
  const suggestions = useMemo(() => ["Explain selection", "Generate tests", "Refactor"], []);
  const mentionState = useMemo(() => buildMentionState(input, contextFiles), [input, contextFiles]);

  const streaming = useStreaming(setMessages);

  useEffect(() => {
    const handleMessage = (event: MessageEvent<ExtensionMessage>) => {
      const payload = event.data;
      if (payload.type === "streamStart" || payload.type === "streamChunk" || payload.type === "streamEnd" || payload.type === "streamError") {
        streaming.handleStream(payload);
      }
      if (payload.type === "updateConversations") {
        setConversations(payload.conversations);
        if (!activeConversationId && payload.conversations.length > 0) {
          setActiveConversationId(payload.conversations[0].id);
        }
      }
      if (payload.type === "updateContext") {
        setContextFiles(payload.files);
        setTokenCount(payload.tokenCount);
      }
      if (payload.type === "setTheme") {
        document.body.dataset.codeeTheme = payload.theme;
      }
      if (payload.type === "patternExplorerData") {
        setPatternConcepts(payload.concepts);
        setPatternImplementations(payload.implementations);
        setLearningQueue(payload.learningQueue);
      }
      if (payload.type === "updateLearningQueue") {
        setLearningQueue(payload.learningQueue);
      }
      if (payload.type === "showPatternExplorer") {
        setActiveView("pattern-explorer");
        setSelectedConceptId(payload.selectedConceptId);
        setSelectedFromLanguage(payload.fromLanguage);
        setSelectedToLanguage(payload.toLanguage);
        vscode.postMessage({ type: "requestPatternExplorerData" } satisfies WebviewMessage);
      }
    };

    window.addEventListener("message", handleMessage as (event: MessageEvent) => void);
    return () => window.removeEventListener("message", handleMessage as (event: MessageEvent) => void);
  }, [streaming]);

  useEffect(() => {
    const nextState: WebviewState = {
      messages,
      attachments,
      conversations,
      contextFiles,
      tokenCount,
      activeConversationId,
      conversationMap,
      activeView,
      patternConcepts,
      patternImplementations,
      learningQueue,
      selectedConceptId,
      selectedFromLanguage,
      selectedToLanguage
    };
    vscode.setState(nextState);
  }, [
    attachments,
    contextFiles,
    conversations,
    messages,
    tokenCount,
    activeConversationId,
    conversationMap,
    activeView,
    patternConcepts,
    patternImplementations,
    learningQueue,
    selectedConceptId,
    selectedFromLanguage,
    selectedToLanguage
  ]);

  useEffect(() => {
    if (activeView === "pattern-explorer") {
      window.location.hash = "#/pattern-explorer";
    } else {
      window.location.hash = "#/chat";
    }
  }, [activeView]);

  useEffect(() => {
    if (!activeConversationId) {
      return;
    }
    setConversationMap((current) => ({
      ...current,
      [activeConversationId]: messages
    }));
  }, [activeConversationId, messages]);

  const sendMessage = useCallback(() => {
    if (!input.trim()) {
      return;
    }
    const message: ChatMessage = {
      id: `${Date.now()}`,
      role: "user",
      content: input,
      createdAt: Date.now(),
      threadId: activeConversationId,
      attachments
    };
    setMessages((current) => [...current, message]);
    if (activeConversationId) {
      setConversationMap((current) => ({
        ...current,
        [activeConversationId]: [...(current[activeConversationId] ?? []), message]
      }));
    }
    const payload: WebviewMessage = {
      type: "sendMessage",
      content: input,
      contextFiles: attachments.map((item) => item.path)
    };
    vscode.postMessage(payload);
    setInput("");
    setAttachments([]);
  }, [attachments, input]);

  const sendSuggestion = useCallback((suggestion: string) => {
    setInput(suggestion);
  }, []);

  const stopStreaming = useCallback(() => {
    const payload: WebviewMessage = { type: "stopGeneration" };
    vscode.postMessage(payload);
    streaming.stop();
  }, [streaming]);

  const handleAction = useCallback((action: WebviewAction) => {
    if (action.type === "copy") {
      vscode.postMessage({ type: "copyCode", code: action.payload.code } satisfies WebviewMessage);
    }
    if (action.type === "insert") {
      vscode.postMessage({ type: "insertCode", code: action.payload.code, position: "cursor" } satisfies WebviewMessage);
    }
    if (action.type === "newFile") {
      vscode.postMessage({ type: "insertCode", code: action.payload.code, position: "newFile" } satisfies WebviewMessage);
    }
  }, []);

  const openSettings = useCallback(() => {
    vscode.postMessage({ type: "openSettings" } satisfies WebviewMessage);
  }, []);

  const openPatternExplorer = useCallback(() => {
    setActiveView("pattern-explorer");
    vscode.postMessage({ type: "openPatternExplorer" } satisfies WebviewMessage);
  }, []);

  const openContextManager = useCallback(() => {
    openSettings();
  }, [openSettings]);

  const attachFile = useCallback((file: ContextFile) => {
    if (file.kind !== "file") {
      return;
    }
    setAttachments((current) => {
      if (current.some((item) => item.path === file.path)) {
        return current;
      }
      const next: ChatAttachment = {
        id: `${file.path}-${Date.now()}`,
        name: file.label,
        path: file.path
      };
      return [...current, next];
    });
    vscode.postMessage({ type: "attachFile", path: file.path } satisfies WebviewMessage);
  }, []);

  const selectMention = useCallback(
    (item: ContextFile) => {
      const result = applyMention(input, mentionState.tokenStart, item);
      setInput(result.nextText);
      if (item.kind === "file") {
        attachFile(item);
      }
    },
    [attachFile, input, mentionState.tokenStart]
  );

  const loadConversation = useCallback((id: string) => {
    vscode.postMessage({ type: "loadConversation", id } satisfies WebviewMessage);
    setActiveConversationId(id);
    setMessages(conversationMap[id] ?? []);
  }, [conversationMap]);

  const deleteConversation = useCallback((id: string) => {
    vscode.postMessage({ type: "deleteConversation", id } satisfies WebviewMessage);
    setConversations((current) => current.filter((item) => item.id !== id));
    setConversationMap((current) => {
      const next = { ...current };
      delete next[id];
      return next;
    });
    if (activeConversationId === id) {
      setActiveConversationId(undefined);
      setMessages([]);
    }
  }, []);

  const learnPattern = useCallback((conceptId: string) => {
    vscode.postMessage({ type: "learnPattern", conceptId } satisfies WebviewMessage);
  }, []);

  const sendTranslationFeedback = useCallback(
    (payload: {
      sourceLanguage: string;
      targetLanguage: string;
      sourceCode: string;
      targetCode: string;
      feedback: string;
    }) => {
      vscode.postMessage({ type: "translationFeedback", ...payload } satisfies WebviewMessage);
    },
    []
  );

  return {
    messages,
    input,
    attachments,
    contextFiles,
    tokenCount,
    conversations,
    activeView,
    patternConcepts,
    patternImplementations,
    learningQueue,
    selectedConceptId,
    selectedFromLanguage,
    selectedToLanguage,
    mentionSuggestions: mentionState.suggestions,
    suggestions,
    streaming: streaming.active,
    setInput,
    sendMessage,
    sendSuggestion,
    stopStreaming,
    handleAction,
    openSettings,
    openPatternExplorer,
    openContextManager,
    attachFile,
    selectMention,
    loadConversation,
    deleteConversation,
    setActiveView,
    setSelectedConceptId,
    setSelectedFromLanguage,
    setSelectedToLanguage,
    learnPattern,
    sendTranslationFeedback
  };
};

function initialViewFromLocation(): "chat" | "pattern-explorer" {
  if (window.location.hash.includes("pattern-explorer")) {
    return "pattern-explorer";
  }
  return "chat";
}

type MentionState = {
  suggestions: ContextFile[];
  tokenStart: number;
};

function buildMentionState(input: string, contextFiles: ContextFile[]): MentionState {
  const match = /([@#])(\w[\w./-]*)?$/.exec(input);
  if (!match || match.index === undefined) {
    return { suggestions: [], tokenStart: -1 };
  }
  const prefix = match[1];
  const query = (match[2] ?? "").toLowerCase();
  const kind = prefix === "@" ? "file" : "symbol";
  const suggestions = contextFiles
    .filter((item) => item.kind === kind)
    .filter((item) => item.label.toLowerCase().includes(query))
    .slice(0, 10);
  return { suggestions, tokenStart: match.index };
}

function applyMention(input: string, tokenStart: number, item: ContextFile): { nextText: string } {
  if (tokenStart < 0) {
    return { nextText: input };
  }
  const prefix = item.kind === "file" ? "@" : "#";
  const before = input.slice(0, tokenStart);
  const nextText = `${before}${prefix}${item.label} `;
  return { nextText };
}
