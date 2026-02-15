import { Diagnostic } from "@codee/languages";
import { ConversationMemory } from "./ConversationMemory";
import { ProjectIndex } from "./ProjectIndex";
import { VectorMemory } from "./VectorMemory";
import { SmartCompression } from "./SmartCompression";
export interface CodeContextOptions {
    projectPath: string;
    filePath?: string;
    cursorLine?: number;
    cursorCharacter?: number;
    languageId?: string;
    userQuery: string;
    systemPrompt: string;
    conversationId?: string;
    diagnostics?: Diagnostic[];
    tokenBudget: number;
}
export declare class CodeContextAssembler {
    private readonly projectIndex;
    private readonly vectorMemory;
    private readonly conversationMemory;
    private readonly compressor;
    constructor(projectIndex: ProjectIndex, vectorMemory: VectorMemory, conversationMemory: ConversationMemory, compressor: SmartCompression);
    assemble(options: CodeContextOptions): Promise<string>;
    private buildProjectSummary;
}
