import { EventEmitter } from "events";
import {
  CompletionItem,
  DefinitionLocation,
  Diagnostic,
  HoverInfo,
  LanguageServerStatus,
} from "./types";
export interface LanguageServerOptions {
  languageId: string;
  command: string;
  args: string[];
  projectPath?: string;
}
export declare class BaseLanguageServer extends EventEmitter {
  protected readonly options: LanguageServerOptions;
  private readonly client;
  private status;
  constructor(options: LanguageServerOptions);
  getLanguageId(): string;
  getProjectPath(): string | undefined;
  start(): Promise<void>;
  stop(): Promise<void>;
  restart(): Promise<void>;
  getStatus(): LanguageServerStatus;
  getDiagnostics(): Promise<Diagnostic[]>;
  getHover(): Promise<HoverInfo | null>;
  getCompletions(): Promise<CompletionItem[]>;
  getDefinition(): Promise<DefinitionLocation | null>;
}
