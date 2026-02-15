"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VectorStore = void 0;
const ProjectIndex_1 = require("./ProjectIndex");
const VectorMemory_1 = require("./VectorMemory");
class VectorStore {
    memory;
    provider;
    constructor(endpoint = "http://localhost:11434", modelId = "nomic-embed-text") {
        this.provider = new VectorMemory_1.OllamaEmbeddingProvider(endpoint, modelId);
        this.memory = new VectorMemory_1.VectorMemory(this.provider, new ProjectIndex_1.ProjectIndex());
    }
    async initialize() {
        await this.memory.initialize();
    }
    configure(endpoint, modelId) {
        this.provider.setEndpoint(endpoint);
        this.provider.setModelId(modelId);
    }
    async search(query, limit, signal) {
        const results = await this.memory.search(query, limit, signal);
        return results.map((result) => ({
            content: result.document.content,
            source: result.document.filePath,
            score: result.score
        }));
    }
}
exports.VectorStore = VectorStore;
