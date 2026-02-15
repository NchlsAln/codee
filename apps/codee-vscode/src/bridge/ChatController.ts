import { randomUUID } from "crypto";
import { EngineHost } from "./EngineHost";
import { ContextProvider } from "./ContextProvider";
import { ChatMessage } from "./MessageProtocol";

export type ChatStreamResponse = Awaited<ReturnType<EngineHost["processRequest"]>>;

export class ChatController {
  private sessionId: string | null = null;
  private readonly inflight = new Map<string, AbortController>();
  private readonly history = new Map<string, ChatMessage[]>();
  private readonly messageSessions = new Map<string, string>();

  constructor(
    private readonly engine: EngineHost,
    private readonly contextProvider: ContextProvider,
    private readonly telemetry?: { track: (event: string, properties?: Record<string, string | number | boolean>) => void }
  ) {}

  getSessionId(): string | null {
    return this.sessionId;
  }

  setSession(sessionId: string): void {
    this.sessionId = sessionId;
  }

  getConversationSummaries(): Array<{ sessionId: string; messageCount: number; lastMessage?: string }> {
    const summaries: Array<{ sessionId: string; messageCount: number; lastMessage?: string }> = [];
    for (const [sessionId, messages] of this.history.entries()) {
      summaries.push({
        sessionId,
        messageCount: messages.length,
        lastMessage: messages[messages.length - 1]?.content
      });
    }
    return summaries;
  }

  getMessages(sessionId: string): ChatMessage[] {
    return this.history.get(sessionId) ?? [];
  }

  async explainSelection(content: string, languageId?: string): Promise<string> {
    const sessionId = await this.ensureSession();
    const response = await this.engine.processRequest({
      sessionId,
      prompt: content,
      task: "explain",
      languageId,
      filePath: this.contextProvider.getActiveFilePath(),
      projectPath: this.contextProvider.getProjectPath(),
      selection: content
    });
    return this.collectStream(response);
  }

  async runGenerateTests(content: string, languageId: string, fileName?: string): Promise<string> {
    const result = await this.engine.generateTests(content, languageId, fileName);
    return result.files[0]?.contents ?? "";
  }

  async sendMessage(requestId: string, text: string): Promise<{ messageId: string; response: ChatStreamResponse }> {
    const sessionId = await this.ensureSession();
    const mentionAttachments = await this.contextProvider.resolveMentions(text);
    const combinedAttachments = [...this.contextProvider.listAttachments(), ...mentionAttachments];
    const attachmentContents = await this.contextProvider.readAttachmentContents(combinedAttachments);

    const prompt = this.buildPrompt(text, attachmentContents);
    const userMessage: ChatMessage = {
      id: randomUUID(),
      role: "user",
      content: text,
      createdAt: Date.now(),
      threadId: sessionId
    };

    this.trackMessage(sessionId, userMessage);
    this.telemetry?.track("chat_message_sent", {
      attachments: combinedAttachments.length,
      messageLength: text.length,
      hasSelection: Boolean(this.contextProvider.getSelectionText())
    });

    const assistantMessageId = randomUUID();
    const response = await this.engine.processRequest({
      sessionId,
      prompt,
      task: "chat",
      languageId: this.contextProvider.getActiveLanguageId(),
      filePath: this.contextProvider.getActiveFilePath(),
      projectPath: this.contextProvider.getProjectPath(),
      selection: this.contextProvider.getSelectionText()
    });

    this.inflight.set(requestId, response.abortController);
    this.messageSessions.set(assistantMessageId, sessionId);
    return { messageId: assistantMessageId, response };
  }

  private async ensureSession(): Promise<string> {
    if (this.sessionId) {
      return this.sessionId;
    }
    const projectPath = this.contextProvider.getProjectPath();
    this.sessionId = await this.engine.startSession(projectPath);
    return this.sessionId;
  }

  private trackMessage(sessionId: string, message: ChatMessage): void {
    const messages = this.history.get(sessionId) ?? [];
    messages.push(message);
    this.history.set(sessionId, messages);
  }

  private buildPrompt(text: string, attachmentContents: string[]): string {
    if (attachmentContents.length === 0) {
      return text;
    }
    return ["Context Files:", attachmentContents.join("\n\n"), "User Query:", text].join("\n\n");
  }

  cancelRequest(requestId: string): void {
    const controller = this.inflight.get(requestId);
    if (controller) {
      controller.abort();
      this.inflight.delete(requestId);
      this.telemetry?.track("chat_request_cancelled");
    }
  }

  recordAssistantMessage(messageId: string, content: string): void {
    const sessionId = this.messageSessions.get(messageId);
    if (!sessionId) {
      return;
    }
    this.trackMessage(sessionId, {
      id: messageId,
      role: "assistant",
      content,
      createdAt: Date.now(),
      threadId: sessionId
    });
  }

  deleteConversation(sessionId: string): void {
    this.history.delete(sessionId);
    if (this.sessionId === sessionId) {
      this.sessionId = null;
    }
  }

  private async collectStream(response: Awaited<ReturnType<EngineHost["processRequest"]>>): Promise<string> {
    let output = "";
    await new Promise<void>((resolve, reject) => {
      response.onChunk((chunk: { content: string }) => {
        output += chunk.content;
      });
      response.onComplete(() => resolve());
      response.onError((error: Error) => reject(error));
    });
    return output;
  }
}
