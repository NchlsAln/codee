import { useCallback, useEffect, useMemo, useState } from "react";
import { ChatAttachment, ChatMessage, WebviewAction } from "../types";
import { getVSCodeApi } from "../utils/vscode";
import { useStreaming } from "./useStreaming";
import { ContextFile, ConversationSummary, ExtensionMessage, WebviewMessage } from "../protocol";

const vscode = getVSCodeApi();

type WebviewState = {
  messages: ChatMessage[];
  attachments: ChatAttachment[];
  conversations: ConversationSummary[];
  contextFiles: ContextFile[];
  tokenCount: number;
  activeConversationId?: string;
  conversationMap?: Record<string, ChatMessage[]>;
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
      conversationMap
    };
    vscode.setState(nextState);
  }, [attachments, contextFiles, conversations, messages, tokenCount, activeConversationId, conversationMap]);

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

  return {
    messages,
    input,
    attachments,
    contextFiles,
    tokenCount,
    conversations,
    mentionSuggestions: mentionState.suggestions,
    suggestions,
    streaming: streaming.active,
    setInput,
    sendMessage,
    sendSuggestion,
    stopStreaming,
    handleAction,
    openSettings,
    openContextManager,
    attachFile,
    selectMention,
    loadConversation,
    deleteConversation
  };
};

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
