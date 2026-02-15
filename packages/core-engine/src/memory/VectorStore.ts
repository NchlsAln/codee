import { ProjectIndex } from "./ProjectIndex";
import { OllamaEmbeddingProvider, VectorMemory, VectorSearchResult } from "./VectorMemory";

export interface VectorMatch {
  content: string;
  source: string;
  score: number;
}

export class VectorStore {
  private readonly memory: VectorMemory;
  private readonly provider: OllamaEmbeddingProvider;

  constructor(endpoint = "http://localhost:11434", modelId = "nomic-embed-text") {
    this.provider = new OllamaEmbeddingProvider(endpoint, modelId);
    this.memory = new VectorMemory(this.provider, new ProjectIndex());
  }

  async initialize(): Promise<void> {
    await this.memory.initialize();
  }

  configure(endpoint: string, modelId: string): void {
    this.provider.setEndpoint(endpoint);
    this.provider.setModelId(modelId);
  }

  async search(query: string, limit: number, signal: AbortSignal): Promise<VectorMatch[]> {
    const results: VectorSearchResult[] = await this.memory.search(query, limit, signal);
    return results.map((result) => ({
      content: result.document.content,
      source: result.document.filePath,
      score: result.score
    }));
  }
}
