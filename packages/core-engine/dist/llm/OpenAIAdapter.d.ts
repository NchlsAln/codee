import { BaseAdapter, LLMRequestContext, LLMStream } from "./BaseAdapter";
export declare class OpenAIAdapter extends BaseAdapter {
    readonly id = "openai";
    private endpoint;
    private pinnedCertificates;
    initialize(): Promise<void>;
    setEndpoint(endpoint: string): void;
    setPinnedCertificates(pins: Record<string, string[]>): void;
    generate(request: LLMRequestContext, signal: AbortSignal): Promise<LLMStream>;
    private buildPinnedDispatcher;
}
