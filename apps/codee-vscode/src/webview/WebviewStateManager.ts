import * as vscode from "vscode";
import { ChatController } from "../bridge/ChatController";
import { ContextProvider } from "../bridge/ContextProvider";
import { ContextFile, ExtensionMessage } from "./MessageProtocol";
import { FileMentionProvider } from "./FileMentionProvider";
import { SymbolMentionProvider } from "./SymbolMentionProvider";

export class WebviewStateManager {
  private webview?: vscode.Webview;

  constructor(
    private readonly context: vscode.ExtensionContext,
    private readonly chatController: ChatController,
    private readonly contextProvider: ContextProvider,
    private readonly fileMentions: FileMentionProvider,
    private readonly symbolMentions: SymbolMentionProvider
  ) {}

  attach(webview: vscode.Webview): void {
    this.webview = webview;
  }

  async sendInitialState(): Promise<void> {
    await this.updateConversations();
    await this.updateContext();
    this.updateTheme();
  }

  async updateConversations(): Promise<void> {
    const conversations = this.chatController.getConversationSummaries().map((summary) => ({
      id: summary.sessionId,
      title: summary.sessionId,
      updatedAt: Date.now(),
      messageCount: summary.messageCount,
      lastMessage: summary.lastMessage
    }));

    this.persist("conversations", conversations);
    this.postMessage({ type: "updateConversations", conversations });
  }

  async updateContext(): Promise<void> {
    const attachments = this.contextProvider.listAttachments().map((attachment) => ({
      path: attachment.path,
      label: attachment.label,
      kind: "file" as const,
      pinned: true,
      icon: "pin"
    }));

    const fileSuggestions = await this.fileMentions.listFiles();
    const symbolSuggestions = await this.symbolMentions.listSymbols();

    const files = mergeContextFiles(attachments, fileSuggestions, symbolSuggestions);
    const tokenCount = await this.estimateTokens(attachments);
    this.persist("context", { files, tokenCount });
    this.postMessage({ type: "updateContext", files, tokenCount });
  }

  async restoreState(): Promise<void> {
    const conversations = this.restore<Array<{ id: string; title: string; updatedAt: number; messageCount: number; lastMessage?: string }>>("conversations");
    if (conversations) {
      this.postMessage({ type: "updateConversations", conversations });
    }
    const context = this.restore<{ files: ContextFile[]; tokenCount: number }>("context");
    if (context) {
      this.postMessage({ type: "updateContext", files: context.files, tokenCount: context.tokenCount });
    }
    const learningQueue = this.restore<string[]>("learningQueue");
    if (learningQueue) {
      this.postMessage({ type: "updateLearningQueue", learningQueue });
    }
  }

  getLearningQueue(): string[] {
    return this.restore<string[]>("learningQueue") ?? [];
  }

  updateLearningQueue(queue: string[]): void {
    this.persist("learningQueue", queue);
    this.postMessage({ type: "updateLearningQueue", learningQueue: queue });
  }

  addTranslationFeedback(entry: {
    sourceLanguage: string;
    targetLanguage: string;
    sourceCode: string;
    targetCode: string;
    feedback: string;
    createdAt: string;
  }): void {
    const current = this.restore<Array<{
      sourceLanguage: string;
      targetLanguage: string;
      sourceCode: string;
      targetCode: string;
      feedback: string;
      createdAt: string;
    }>>("translationFeedback") ?? [];
    const next = [...current, entry];
    this.persist("translationFeedback", next);
  }

  postMessage(message: ExtensionMessage): void {
    void this.webview?.postMessage(message);
  }

  updateTheme(): void {
    const theme = mapTheme(vscode.window.activeColorTheme.kind);
    this.postMessage({ type: "setTheme", theme });
  }

  private persist<T>(key: string, value: T): void {
    void this.context.globalState.update(`codee.webview.${key}`, value);
  }

  private restore<T>(key: string): T | undefined {
    return this.context.globalState.get<T>(`codee.webview.${key}`);
  }

  private async estimateTokens(attachments: Array<{ path: string; label: string }>): Promise<number> {
    if (attachments.length === 0) {
      return 0;
    }
    const contents = await this.contextProvider.readAttachmentContents(attachments);
    const totalChars = contents.reduce((sum, content) => sum + content.length, 0);
    return Math.ceil(totalChars / 4);
  }
}

function mapTheme(kind: vscode.ColorThemeKind): "light" | "dark" | "high-contrast" {
  if (kind === vscode.ColorThemeKind.Light) {
    return "light";
  }
  if (kind === vscode.ColorThemeKind.HighContrast || kind === vscode.ColorThemeKind.HighContrastLight) {
    return "high-contrast";
  }
  return "dark";
}

function mergeContextFiles(...lists: ContextFile[][]): ContextFile[] {
  const map = new Map<string, ContextFile>();
  for (const list of lists) {
    for (const file of list) {
      const key = `${file.kind}:${file.label}`;
      if (!map.has(key)) {
        map.set(key, file);
      }
    }
  }
  return Array.from(map.values());
}
