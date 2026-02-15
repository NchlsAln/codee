"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VectorMemory = exports.OllamaEmbeddingProvider = void 0;
const undici_1 = require("undici");
class OllamaEmbeddingProvider {
    endpoint;
    modelId;
    constructor(endpoint, modelId) {
        this.endpoint = endpoint;
        this.modelId = modelId;
    }
    setEndpoint(endpoint) {
        this.endpoint = endpoint;
    }
    setModelId(modelId) {
        this.modelId = modelId;
    }
    async embed(texts, signal) {
        if (texts.length === 0) {
            return [];
        }
        const results = await Promise.all(texts.map(async (text) => {
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
            const payload = (await response.json());
            return payload.embedding ?? [];
        }));
        return results;
    }
}
exports.OllamaEmbeddingProvider = OllamaEmbeddingProvider;
class VectorMemory {
    provider;
    projectIndex;
    documents = [];
    fileHashes = new Map();
    embeddingCache = new LruCache(2000);
    embeddingCacheLimitValue = 2000;
    indexing = false;
    constructor(provider, projectIndex) {
        this.provider = provider;
        this.projectIndex = projectIndex;
    }
    async initialize() {
        return;
    }
    setEmbeddingCacheLimit(maxEntries) {
        this.embeddingCacheLimitValue = Math.max(0, maxEntries);
        this.embeddingCache = new LruCache(this.embeddingCacheLimitValue);
    }
    async indexProject(projectPath, onProgress, signal, priorityPaths = [], maxFiles) {
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
        }
        finally {
            this.indexing = false;
        }
    }
    async indexFile(filePath, content, signal) {
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
        const missing = [];
        const cachedEmbeddings = [];
        chunks.forEach((chunk, index) => {
            const hash = chunkHashes[index];
            if (!hash) {
                return;
            }
            const cached = this.embeddingCache.get(hash);
            if (cached) {
                cachedEmbeddings[index] = cached;
            }
            else {
                missing.push({ index, text: chunk.content });
            }
        });
        if (missing.length > 0) {
            const results = await this.provider.embed(missing.map((item) => item.text), signal);
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
    removeFile(filePath) {
        const remaining = this.documents.filter((doc) => doc.filePath !== filePath);
        this.documents.length = 0;
        this.documents.push(...remaining);
        this.fileHashes.delete(filePath);
    }
    compact(options) {
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
        const removedFiles = new Set(this.documents.filter((doc) => !filtered.includes(doc)).map((doc) => doc.filePath));
        this.documents.length = 0;
        this.documents.push(...filtered);
        removedFiles.forEach((filePath) => this.fileHashes.delete(filePath));
    }
    clear() {
        this.documents.length = 0;
        this.fileHashes.clear();
        this.embeddingCache = new LruCache(this.embeddingCacheLimitValue);
    }
    async search(query, limit, signal) {
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
    chunkByBoundaries(content) {
        const pattern = /(function\s+\w+|class\s+\w+|def\s+\w+|interface\s+\w+)/g;
        const matches = Array.from(content.matchAll(pattern));
        if (matches.length === 0) {
            return [{ content, keywords: this.extractKeywords(content) }];
        }
        const chunks = [];
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
    extractKeywords(content) {
        return content
            .toLowerCase()
            .split(/[^a-z0-9_]+/)
            .filter((token) => token.length > 3)
            .slice(0, 40);
    }
}
exports.VectorMemory = VectorMemory;
function cosineSimilarity(a, b) {
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
async function fetchWithRetry(url, init, attempts = 3) {
    let lastError;
    for (let attempt = 0; attempt < attempts; attempt += 1) {
        try {
            return await (0, undici_1.fetch)(url, init);
        }
        catch (error) {
            lastError = error;
            await sleep(300 * 2 ** attempt);
        }
    }
    throw lastError instanceof Error ? lastError : new Error("Embedding request failed.");
}
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
class LruCache {
    maxEntries;
    map = new Map();
    constructor(maxEntries) {
        this.maxEntries = maxEntries;
    }
    get(key) {
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
    set(key, value) {
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
function hashString(content) {
    let hash = 5381;
    for (let i = 0; i < content.length; i += 1) {
        hash = (hash * 33) ^ content.charCodeAt(i);
    }
    return (hash >>> 0).toString(16);
}
