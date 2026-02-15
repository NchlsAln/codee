import { StreamChunk, UserRequest } from "../engine/types";
export interface LLMRequestContext {
    systemPrompt: string;
    context: string;
    userRequest: UserRequest;
    modelId: string;
    temperature: number;
    task: UserRequest["task"];
}
export interface LLMStream {
    stream: AsyncIterable<StreamChunk>;
}
export declare abstract class BaseAdapter {
    abstract readonly id: string;
    abstract initialize(): Promise<void>;
    abstract generate(request: LLMRequestContext, signal: AbortSignal): Promise<LLMStream>;
    listModels?(): Promise<string[]>;
    setEndpoint?(endpoint: string): void;
}
