export interface VectorMatch {
    content: string;
    source: string;
    score: number;
}
export declare class VectorStore {
    private readonly memory;
    private readonly provider;
    constructor(endpoint?: string, modelId?: string);
    initialize(): Promise<void>;
    configure(endpoint: string, modelId: string): void;
    search(query: string, limit: number, signal: AbortSignal): Promise<VectorMatch[]>;
}
