import { UserRequest } from "./types";
import { CodeeConfig } from "../config/types";
import { CodeContextAssembler } from "../memory/CodeContextAssembler";
import { ConversationStore } from "../memory/ConversationStore";
import { Diagnostic, LanguageRegistry } from "@codee/languages";
interface ContextBuildOptions {
    request: UserRequest;
    languageId?: string;
    tokenLimit: number;
    abortSignal: AbortSignal;
    diagnostics?: Diagnostic[];
    config: CodeeConfig;
    conversationId?: string;
}
export declare class ContextBuilder {
    private readonly languageRegistry;
    private readonly assembler;
    private readonly conversationStore;
    constructor(languageRegistry: LanguageRegistry, assembler: CodeContextAssembler, conversationStore: ConversationStore);
    build(options: ContextBuildOptions): Promise<string>;
    private buildSystemPrompt;
}
export {};
