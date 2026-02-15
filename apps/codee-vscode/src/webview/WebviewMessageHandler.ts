import * as vscode from "vscode";
import { z } from "zod";
import { randomUUID } from "crypto";
import { ChatController } from "../bridge/ChatController";
import { ContextProvider } from "../bridge/ContextProvider";
import { CodeActionHandler } from "./CodeActionHandler";
import { WebviewStateManager } from "./WebviewStateManager";
import { ExtensionMessage, WebviewMessage } from "./MessageProtocol";

const sendMessageSchema = z.object({
  type: z.literal("sendMessage"),
  content: z.string(),
  contextFiles: z.array(z.string())
});

const stopSchema = z.object({ type: z.literal("stopGeneration") });
const insertSchema = z.object({
  type: z.literal("insertCode"),
  code: z.string(),
  position: z.enum(["cursor", "newFile"]).optional()
});
const copySchema = z.object({ type: z.literal("copyCode"), code: z.string() });
const openSettingsSchema = z.object({ type: z.literal("openSettings") });
const loadConversationSchema = z.object({ type: z.literal("loadConversation"), id: z.string() });
const deleteConversationSchema = z.object({ type: z.literal("deleteConversation"), id: z.string() });
const attachFileSchema = z.object({ type: z.literal("attachFile"), path: z.string() });

const messageSchema = z.union([
  sendMessageSchema,
  stopSchema,
  insertSchema,
  copySchema,
  openSettingsSchema,
  loadConversationSchema,
  deleteConversationSchema,
  attachFileSchema
]);

export class WebviewMessageHandler implements vscode.Disposable {
  private readonly disposables: vscode.Disposable[] = [];
  private readonly inflight = new Map<string, string>();
  private lastRequestId: string | null = null;

  constructor(
    private readonly webview: vscode.Webview,
    private readonly chatController: ChatController,
    private readonly contextProvider: ContextProvider,
    private readonly codeActionHandler: CodeActionHandler,
    private readonly stateManager: WebviewStateManager
  ) {
    this.disposables.push(
      this.webview.onDidReceiveMessage((message: unknown) => this.handleMessage(message))
    );
  }

  dispose(): void {
    this.disposables.forEach((disposable) => disposable.dispose());
    this.disposables.length = 0;
  }

  private async handleMessage(message: unknown): Promise<void> {
    const result = messageSchema.safeParse(message);
    if (!result.success) {
      this.postMessage({
        type: "streamError",
        messageId: "system",
        error: "Invalid message payload."
      });
      return;
    }

    const payload = result.data as WebviewMessage;
    switch (payload.type) {
      case "sendMessage":
        await this.handleSendMessage(payload);
        return;
      case "stopGeneration":
        this.handleStop();
        return;
      case "insertCode":
        await this.codeActionHandler.insertCode(payload.code, payload.position);
        return;
      case "copyCode":
        await this.codeActionHandler.copyCode(payload.code);
        return;
      case "openSettings":
        void vscode.commands.executeCommand("codee.openSettings");
        return;
      case "loadConversation":
        this.chatController.setSession(payload.id);
        await this.stateManager.updateConversations();
        return;
      case "deleteConversation":
        this.chatController.deleteConversation(payload.id);
        await this.stateManager.updateConversations();
        return;
      case "attachFile":
        await this.contextProvider.addFileToContext(payload.path);
        await this.stateManager.updateContext();
        return;
      default:
        return;
    }
  }

  private async handleSendMessage(payload: { content: string; contextFiles: string[] }): Promise<void> {
    const requestId = randomUUID();
    this.lastRequestId = requestId;

    try {
      for (const filePath of payload.contextFiles) {
        await this.contextProvider.addFileToContext(filePath);
      }
      await this.stateManager.updateContext();

      const { messageId, response } = await this.chatController.sendMessage(requestId, payload.content);
      this.inflight.set(requestId, messageId);

      this.postMessage({ type: "streamStart", messageId });

      let buffer = "";
      response.onChunk((chunk: { content: string }) => {
        buffer += chunk.content;
        this.postMessage({ type: "streamChunk", messageId, chunk: chunk.content });
      });

      response.onComplete(async () => {
        this.inflight.delete(requestId);
        this.chatController.recordAssistantMessage(messageId, buffer);
        this.postMessage({ type: "streamEnd", messageId });
        await this.stateManager.updateConversations();
      });

      response.onError((error: Error) => {
        this.inflight.delete(requestId);
        this.postMessage({ type: "streamError", messageId, error: error.message });
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : "Failed to send message.";
      this.postMessage({ type: "streamError", messageId: "system", error: message });
    }
  }

  private handleStop(): void {
    if (!this.lastRequestId) {
      return;
    }
    this.chatController.cancelRequest(this.lastRequestId);
    const messageId = this.inflight.get(this.lastRequestId);
    if (messageId) {
      this.postMessage({ type: "streamEnd", messageId });
    }
  }

  private postMessage(message: ExtensionMessage): void {
    void this.webview.postMessage(message);
  }
}
