import { ProjectIndex } from "./ProjectIndex";
export interface EmbeddingProvider {
    embed(texts: string[], signal?: AbortSignal): Promise<number[][]>;
}
export interface VectorDocument {
    id: string;
    filePath: string;
    content: string;
    embedding: number[];
    keywords: string[];
    lastIndexed: number;
}
export interface VectorSearchResult {
    document: VectorDocument;
    score: number;
}
export declare class OllamaEmbeddingProvider implements EmbeddingProvider {
    private endpoint;
    private modelId;
    constructor(endpoint: string, modelId: string);
    setEndpoint(endpoint: string): void;
    setModelId(modelId: string): void;
    embed(texts: string[], signal?: AbortSignal): Promise<number[][]>;
}
export declare class VectorMemory {
    private readonly provider;
    private readonly projectIndex;
    private readonly documents;
    private readonly fileHashes;
    private embeddingCache;
    private embeddingCacheLimitValue;
    private indexing;
    constructor(provider: EmbeddingProvider, projectIndex: ProjectIndex);
    initialize(): Promise<void>;
    setEmbeddingCacheLimit(maxEntries: number): void;
    indexProject(projectPath: string, onProgress?: (current: number, total: number) => void, signal?: AbortSignal, priorityPaths?: string[], maxFiles?: number): Promise<void>;
    indexFile(filePath: string, content: string, signal?: AbortSignal): Promise<void>;
    removeFile(filePath: string): void;
    compact(options?: {
        maxDocuments?: number;
        maxAgeMs?: number;
    }): void;
    clear(): void;
    search(query: string, limit: number, signal?: AbortSignal): Promise<VectorSearchResult[]>;
    private chunkByBoundaries;
    private extractKeywords;
}
