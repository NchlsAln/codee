import { StreamChunk, UserRequest } from "../engine/types";
import { LanguageRegistry } from "@codee/languages";
import { ModelSelection } from "../llm/ModelRouter";
interface GeneratorContext {
    model: ModelSelection;
    request: UserRequest;
    context: string;
    systemPrompt: string;
    abortSignal: AbortSignal;
}
interface GenerationStrategy {
    generate(context: GeneratorContext): AsyncIterable<StreamChunk>;
}
export declare class CodeGenerator {
    private readonly languageRegistry;
    constructor(languageRegistry: LanguageRegistry);
    createStrategy(task: UserRequest["task"], languageId: string): GenerationStrategy;
    buildSystemPrompt(languageId: string | undefined, fallback: string): string;
}
export {};
