"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelRouter = void 0;
const OllamaAdapter_1 = require("./OllamaAdapter");
const OpenAIAdapter_1 = require("./OpenAIAdapter");
const errors_1 = require("../engine/errors");
const MockAdapter_1 = require("./MockAdapter");
class ModelRouter {
    activeAdapterId = "ollama";
    defaultModelId = "local-default";
    chatModelId = "";
    codeModelId = "";
    embeddingModelId = "";
    temperature = 0.2;
    endpoint = "";
    allowCloud = false;
    pinnedCertificates = {};
    mockEnabled = false;
    adapters = {
        ollama: new OllamaAdapter_1.OllamaAdapter(),
        openai: new OpenAIAdapter_1.OpenAIAdapter(),
        mock: new MockAdapter_1.MockAdapter()
    };
    async initialize() {
        await Promise.all(Object.values(this.adapters).map((adapter) => adapter.initialize()));
    }
    applyConfig(config) {
        this.defaultModelId = config.core.modelId;
        this.chatModelId = config.core.chatModelId ?? "";
        this.codeModelId = config.core.codeModelId ?? "";
        this.embeddingModelId = config.core.embeddingModelId ?? "";
        this.temperature = config.advanced.temperature;
        this.endpoint = config.core.modelEndpoint ?? "";
        this.allowCloud = config.core.cloudFallback && !config.privacy.offlineMode;
        this.pinnedCertificates = config.core.pinnedCertificates ?? {};
        this.mockEnabled = config.advanced.mockLlmEnabled;
        const adapter = this.adapters[this.activeAdapterId];
        if (this.endpoint && adapter?.setEndpoint) {
            adapter.setEndpoint(this.endpoint);
        }
        const openai = this.adapters.openai;
        if (openai?.setPinnedCertificates) {
            openai.setPinnedCertificates(this.pinnedCertificates);
        }
        if (this.mockEnabled) {
            this.activeAdapterId = "mock";
        }
        else if (this.activeAdapterId === "mock") {
            this.activeAdapterId = "ollama";
        }
    }
    selectModel(task, languageId) {
        void languageId;
        const adapter = this.getAdapter(this.activeAdapterId);
        if (adapter.id !== "ollama" && adapter.id !== "mock" && !this.allowCloud) {
            throw new errors_1.EngineError("config", "Cloud adapters are disabled.", "Enable codee.core.cloudFallback and disable offline mode.");
        }
        const modelId = this.resolveModelId(task);
        return {
            adapter,
            modelId,
            temperature: this.temperature
        };
    }
    resolveEmbeddingModel() {
        const adapter = this.getAdapter(this.activeAdapterId);
        return {
            adapter,
            modelId: this.embeddingModelId || this.defaultModelId,
            temperature: this.temperature
        };
    }
    getActiveAdapter() {
        return this.getAdapter(this.activeAdapterId);
    }
    getAdapter(adapterId) {
        const fallback = this.adapters.ollama;
        if (!fallback) {
            throw new errors_1.EngineError("config", "No default adapter configured.");
        }
        return this.adapters[adapterId] ?? fallback;
    }
    resolveModelId(task) {
        if (task === "chat" || task === "explain") {
            return this.chatModelId || this.defaultModelId;
        }
        if (task === "generate-tests" || task === "refactor" || task === "complete") {
            return this.codeModelId || this.defaultModelId;
        }
        return this.defaultModelId;
    }
    async setActiveModel(modelId) {
        if (this.adapters[modelId]) {
            this.activeAdapterId = modelId;
        }
        else {
            this.defaultModelId = modelId;
        }
    }
}
exports.ModelRouter = ModelRouter;
