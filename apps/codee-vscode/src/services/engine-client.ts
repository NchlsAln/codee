import * as vscode from "vscode";
import {
  ChatMessage,
  EngineEvent,
  EngineStatusEvent,
  ExplainCodeRequest,
  GenerateTestsRequest,
  RefactorRequest,
  StartSessionResponse,
  SwitchLanguageModeRequest
} from "./engine-protocol";
import { randomUUID } from "crypto";

type EngineEventHandler = (event: EngineEvent) => void;

type LanguageServerStatus = {
  language: string;
  state: "running" | "stopped" | "error";
};

export class EngineClient {
  private readonly handlers: EngineEventHandler[] = [];
  private status: EngineStatusEvent = {
    type: "engine.status",
    status: "disconnected",
    model: "unknown"
  };
  private activeModel = "local-default";

  constructor(private readonly context: vscode.ExtensionContext) {}

  onEvent(handler: EngineEventHandler): void {
    this.handlers.push(handler);
  }

  async startSession(): Promise<StartSessionResponse> {
    const response: StartSessionResponse = {
      type: "session.started",
      sessionId: randomUUID()
    };

    return response;
  }

  sendChatMessage(text: string, _sessionId: string | null): void {
    const message: ChatMessage = {
      id: randomUUID(),
      role: "user",
      content: text,
      createdAt: Date.now()
    };

    this.emit({ type: "chat.message", message });

    const assistantMessageId = randomUUID();
    this.emit({ type: "chat.chunk", messageId: assistantMessageId, chunk: "Thinking..." });
  }

  async explainSelection(content: string, languageId: string): Promise<void> {
    const request: ExplainCodeRequest = { type: "code.explain", content, languageId };
    void request;
  }

  async generateTests(content: string, languageId: string): Promise<void> {
    const request: GenerateTestsRequest = { type: "code.tests", content, languageId };
    void request;
  }

  async refactorSelection(content: string, languageId: string): Promise<void> {
    const request: RefactorRequest = { type: "code.refactor", content, languageId };
    void request;
  }

  setLanguageMode(languageId: string): void {
    const request: SwitchLanguageModeRequest = { type: "language.switch", languageId };
    void request;
  }

  getLanguageServerStatus(): LanguageServerStatus[] {
    const enabled = vscode.workspace.getConfiguration("codee").get<string[]>("languages.enabled") ?? [];
    return enabled.map((language) => ({ language, state: "running" }));
  }

  getActiveModel(): string {
    return this.activeModel;
  }

  getStatus(): EngineStatusEvent {
    return this.status;
  }

  setStatus(status: EngineStatusEvent): void {
    this.status = status;
    this.emit(status);
  }

  private emit(event: EngineEvent): void {
    this.handlers.forEach((handler) => handler(event));
  }
}
