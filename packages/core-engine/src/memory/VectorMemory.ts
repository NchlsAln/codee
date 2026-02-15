import { fetch } from "undici";
import type { Response as UndiciResponse } from "undici";
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

export class OllamaEmbeddingProvider implements EmbeddingProvider {
  constructor(private endpoint: string, private modelId: string) {}

  setEndpoint(endpoint: string): void {
    this.endpoint = endpoint;
  }

  setModelId(modelId: string): void {
    this.modelId = modelId;
  }

  async embed(texts: string[], signal?: AbortSignal): Promise<number[][]> {
    if (texts.length === 0) {
      return [];
    }

    const results = await Promise.all(
      texts.map(async (text) => {
        const response = await fetchWithRetry(`${this.endpoint}/api/embeddings`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ model: this.modelId, prompt: text }),
          signal
        });
        if (!response.ok) {
          const message = await response.text();
          throw new Error(`Embedding request failed (${response.status}): ${message}`);
        }
        const payload = (await response.json()) as { embedding?: number[] };
        return payload.embedding ?? [];
      })
    );

    return results;
  }
}

export class VectorMemory {
  private readonly documents: VectorDocument[] = [];
  private readonly fileHashes = new Map<string, string>();
  private embeddingCache = new LruCache<string, number[]>(2000);
  private embeddingCacheLimitValue = 2000;
  private indexing = false;

  constructor(private readonly provider: EmbeddingProvider, private readonly projectIndex: ProjectIndex) {}

  async initialize(): Promise<void> {
    return;
  }

  setEmbeddingCacheLimit(maxEntries: number): void {
    this.embeddingCacheLimitValue = Math.max(0, maxEntries);
    this.embeddingCache = new LruCache<string, number[]>(this.embeddingCacheLimitValue);
  }

  async indexProject(
    projectPath: string,
    onProgress?: (current: number, total: number) => void,
    signal?: AbortSignal,
    priorityPaths: string[] = [],
    maxFiles?: number
  ): Promise<void> {
    if (this.indexing) {
      return;
    }
    this.indexing = true;
    try {
      await this.projectIndex.scan(projectPath, { signal });
      const files = this.projectIndex.listFiles();
      if (typeof maxFiles === "number" && maxFiles > 0 && files.length > maxFiles) {
        throw new Error(`Project file count ${files.length} exceeds limit ${maxFiles}.`);
      }
      const prioritySet = new Set(priorityPaths);
      const ordered = [
        ...files.filter((file) => prioritySet.has(file.path)),
        ...files.filter((file) => !prioritySet.has(file.path))
      ];
      let processed = 0;
      for (const file of ordered) {
        if (signal?.aborted) {
          break;
        }
        const content = await this.projectIndex.getFileContent(file.path);
        await this.indexFile(file.path, content, signal);
        processed += 1;
        onProgress?.(processed, ordered.length);
      }
    } finally {
      this.indexing = false;
    }
  }

  async indexFile(filePath: string, content: string, signal?: AbortSignal): Promise<void> {
    if (signal?.aborted) {
      return;
    }
    const contentHash = hashString(content);
    if (this.fileHashes.get(filePath) === contentHash) {
      return;
    }
    this.removeFile(filePath);
    const chunks = this.chunkByBoundaries(content);
    const chunkHashes = chunks.map((chunk) => hashString(chunk.content));
    const missing: Array<{ index: number; text: string }> = [];
    const cachedEmbeddings: number[][] = [];

    chunks.forEach((chunk, index) => {
      const hash = chunkHashes[index];
      if (!hash) {
        return;
      }
      const cached = this.embeddingCache.get(hash);
      if (cached) {
        cachedEmbeddings[index] = cached;
      } else {
        missing.push({ index, text: chunk.content });
      }
    });

    if (missing.length > 0) {
      const results = await this.provider.embed(
        missing.map((item) => item.text),
        signal
      );
      missing.forEach((item, resultIndex) => {
        const embedding = results[resultIndex] ?? [];
        cachedEmbeddings[item.index] = embedding;
        const hash = chunkHashes[item.index];
        if (hash) {
          this.embeddingCache.set(hash, embedding);
        }
      });
    }

    chunks.forEach((chunk, index) => {
      const embedding = cachedEmbeddings[index] ?? [];
      const hash = chunkHashes[index];
      if (!hash) {
        return;
      }
      this.documents.push({
        id: `${filePath}:${index}`,
        filePath,
        content: chunk.content,
        embedding,
        keywords: chunk.keywords,
        lastIndexed: Date.now()
      });
    });
    this.fileHashes.set(filePath, contentHash);
  }

  removeFile(filePath: string): void {
    const remaining = this.documents.filter((doc) => doc.filePath !== filePath);
    this.documents.length = 0;
    this.documents.push(...remaining);
    this.fileHashes.delete(filePath);
  }

  compact(options?: { maxDocuments?: number; maxAgeMs?: number }): void {
    const maxDocuments = options?.maxDocuments ?? 0;
    const maxAgeMs = options?.maxAgeMs ?? 0;
    const now = Date.now();

    let filtered = this.documents;
    if (maxAgeMs > 0) {
      filtered = filtered.filter((doc) => now - doc.lastIndexed <= maxAgeMs);
    }

    if (maxDocuments > 0 && filtered.length > maxDocuments) {
      const sorted = [...filtered].sort((a, b) => a.lastIndexed - b.lastIndexed);
      filtered = sorted.slice(sorted.length - maxDocuments);
    }

    const removedFiles = new Set(
      this.documents.filter((doc) => !filtered.includes(doc)).map((doc) => doc.filePath)
    );

    this.documents.length = 0;
    this.documents.push(...filtered);
    removedFiles.forEach((filePath) => this.fileHashes.delete(filePath));
  }

  clear(): void {
    this.documents.length = 0;
    this.fileHashes.clear();
    this.embeddingCache = new LruCache<string, number[]>(this.embeddingCacheLimitValue);
  }

  async search(query: string, limit: number, signal?: AbortSignal): Promise<VectorSearchResult[]> {
    if (!query.trim()) {
      return [];
    }
    if (signal?.aborted) {
      return [];
    }

    const [queryEmbedding] = await this.provider.embed([query], signal);
    const keywordSet = this.extractKeywords(query);

    const scored = this.documents.map((doc) => {
      const vectorScore = cosineSimilarity(queryEmbedding ?? [], doc.embedding);
      const keywordScore = keywordSet.filter((keyword) => doc.keywords.includes(keyword)).length;
      return {
        document: doc,
        score: vectorScore + keywordScore * 0.1
      };
    });

    return scored.sort((a, b) => b.score - a.score).slice(0, limit);
  }

  private chunkByBoundaries(content: string): Array<{ content: string; keywords: string[] }> {
    const pattern = /(function\s+\w+|class\s+\w+|def\s+\w+|interface\s+\w+)/g;
    const matches = Array.from(content.matchAll(pattern));
    if (matches.length === 0) {
      return [{ content, keywords: this.extractKeywords(content) }];
    }

    const chunks: Array<{ content: string; keywords: string[] }> = [];
    for (let i = 0; i < matches.length; i += 1) {
      const current = matches[i];
      if (!current || current.index === undefined) {
        continue;
      }
      const next = matches[i + 1];
      const start = current.index;
      const end = next?.index ?? content.length;
      const slice = content.slice(start, end);
      chunks.push({ content: slice, keywords: this.extractKeywords(slice) });
    }
    return chunks;
  }

  private extractKeywords(content: string): string[] {
    return content
      .toLowerCase()
      .split(/[^a-z0-9_]+/)
      .filter((token) => token.length > 3)
      .slice(0, 40);
  }
}

function cosineSimilarity(a: number[], b: number[]): number {
  const length = Math.min(a.length, b.length);
  let dot = 0;
  let magA = 0;
  let magB = 0;
  for (let i = 0; i < length; i += 1) {
    const valueA = a[i] ?? 0;
    const valueB = b[i] ?? 0;
    dot += valueA * valueB;
    magA += valueA * valueA;
    magB += valueB * valueB;
  }
  if (magA === 0 || magB === 0) {
    return 0;
  }
  return dot / (Math.sqrt(magA) * Math.sqrt(magB));
}

async function fetchWithRetry(
  url: string,
  init: Parameters<typeof fetch>[1],
  attempts = 3
): Promise<UndiciResponse> {
  let lastError: unknown;
  for (let attempt = 0; attempt < attempts; attempt += 1) {
    try {
      return await fetch(url, init);
    } catch (error) {
      lastError = error;
      await sleep(300 * 2 ** attempt);
    }
  }
  throw lastError instanceof Error ? lastError : new Error("Embedding request failed.");
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

class LruCache<K, V> {
  private readonly maxEntries: number;
  private readonly map = new Map<K, V>();

  constructor(maxEntries: number) {
    this.maxEntries = maxEntries;
  }

  get(key: K): V | undefined {
    if (!this.map.has(key)) {
      return undefined;
    }
    const value = this.map.get(key);
    if (value === undefined) {
      return undefined;
    }
    this.map.delete(key);
    this.map.set(key, value);
    return value;
  }

  set(key: K, value: V): void {
    if (this.maxEntries === 0) {
      return;
    }
    if (this.map.has(key)) {
      this.map.delete(key);
    }
    this.map.set(key, value);
    if (this.map.size > this.maxEntries) {
      const oldest = this.map.keys().next();
      if (!oldest.done) {
        this.map.delete(oldest.value);
      }
    }
  }
}

function hashString(content: string): string {
  let hash = 5381;
  for (let i = 0; i < content.length; i += 1) {
    hash = (hash * 33) ^ content.charCodeAt(i);
  }
  return (hash >>> 0).toString(16);
}