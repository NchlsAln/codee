import { EventEmitter } from "events";
import {
  CompletionItem,
  DefinitionLocation,
  Diagnostic,
  HoverInfo,
  LanguageServerStatus
} from "./types";
import { LspClient } from "./LspClient";

export interface LanguageServerOptions {
  languageId: string;
  command: string;
  args: string[];
  projectPath?: string;
}

export class BaseLanguageServer extends EventEmitter {
  private readonly client = new LspClient();
  private status: LanguageServerStatus = { state: "stopped" };

  constructor(protected readonly options: LanguageServerOptions) {
    super();
  }

  getLanguageId(): string {
    return this.options.languageId;
  }

  getProjectPath(): string | undefined {
    return this.options.projectPath;
  }

  async start(): Promise<void> {
    if (this.status.state === "running") {
      return;
    }

    this.status = { state: "starting" };
    try {
      this.client.start(this.options.command, this.options.args, this.options.projectPath);
      this.status = { state: "running" };
    } catch (error) {
      this.status = { state: "error", message: (error as Error).message };
      throw error;
    }
  }

  async stop(): Promise<void> {
    this.client.stop();
    this.status = { state: "stopped" };
  }

  async restart(): Promise<void> {
    await this.stop();
    await this.start();
  }

  getStatus(): LanguageServerStatus {
    return this.status;
  }

  async getDiagnostics(): Promise<Diagnostic[]> {
    return [];
  }

  async getHover(): Promise<HoverInfo | null> {
    return null;
  }

  async getCompletions(): Promise<CompletionItem[]> {
    return [];
  }

  async getDefinition(): Promise<DefinitionLocation | null> {
    return null;
  }
}