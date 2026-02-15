import { BaseAdapter, LLMRequestContext, LLMStream } from "./BaseAdapter";
export declare class OllamaAdapter extends BaseAdapter {
    readonly id = "ollama";
    private endpoint;
    initialize(): Promise<void>;
    setEndpoint(endpoint: string): void;
    listModels(): Promise<string[]>;
    generate(request: LLMRequestContext, signal: AbortSignal): Promise<LLMStream>;
}
