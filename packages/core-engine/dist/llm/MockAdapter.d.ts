import { BaseAdapter, LLMRequestContext, LLMStream } from "./BaseAdapter";
export declare class MockAdapter extends BaseAdapter {
    readonly id = "mock";
    initialize(): Promise<void>;
    generate(request: LLMRequestContext, signal: AbortSignal): Promise<LLMStream>;
}
