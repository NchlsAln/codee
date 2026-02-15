import { BaseAdapter } from "./BaseAdapter";
import { CodeeConfig } from "../config/types";
import { OllamaAdapter } from "./OllamaAdapter";
import { OpenAIAdapter } from "./OpenAIAdapter";
import { EngineError } from "../engine/errors";
import { MockAdapter } from "./MockAdapter";

export interface ModelSelection {
  adapter: BaseAdapter;
  modelId: string;
  temperature: number;
}

export class ModelRouter {
  private activeAdapterId = "ollama";
  private defaultModelId = "local-default";
  private chatModelId = "";
  private codeModelId = "";
  private embeddingModelId = "";
  private temperature = 0.2;
  private endpoint = "";
  private allowCloud = false;
  private pinnedCertificates: Record<string, string[]> = {};
  private mockEnabled = false;
  private readonly adapters: Record<string, BaseAdapter> = {
    ollama: new OllamaAdapter(),
    openai: new OpenAIAdapter(),
    mock: new MockAdapter()
  };

  async initialize(): Promise<void> {
    await Promise.all(Object.values(this.adapters).map((adapter) => adapter.initialize()));
  }

  applyConfig(config: CodeeConfig): void {
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
    const openai = this.adapters.openai as OpenAIAdapter | undefined;
    if (openai?.setPinnedCertificates) {
      openai.setPinnedCertificates(this.pinnedCertificates);
    }
    if (this.mockEnabled) {
      this.activeAdapterId = "mock";
    } else if (this.activeAdapterId === "mock") {
      this.activeAdapterId = "ollama";
    }
  }

  selectModel(task: string, languageId: string): ModelSelection {
    void languageId;
    const adapter = this.getAdapter(this.activeAdapterId);
    if (adapter.id !== "ollama" && adapter.id !== "mock" && !this.allowCloud) {
      throw new EngineError(
        "config",
        "Cloud adapters are disabled.",
        "Enable codee.core.cloudFallback and disable offline mode."
      );
    }
    const modelId = this.resolveModelId(task);
    return {
      adapter,
      modelId,
      temperature: this.temperature
    };
  }

  resolveEmbeddingModel(): ModelSelection {
    const adapter = this.getAdapter(this.activeAdapterId);
    return {
      adapter,
      modelId: this.embeddingModelId || this.defaultModelId,
      temperature: this.temperature
    };
  }

  getActiveAdapter(): BaseAdapter {
    return this.getAdapter(this.activeAdapterId);
  }

  private getAdapter(adapterId: string): BaseAdapter {
    const fallback = this.adapters.ollama;
    if (!fallback) {
      throw new EngineError("config", "No default adapter configured.");
    }
    return this.adapters[adapterId] ?? fallback;
  }

  private resolveModelId(task: string): string {
    if (task === "chat" || task === "explain") {
      return this.chatModelId || this.defaultModelId;
    }
    if (task === "generate-tests" || task === "refactor" || task === "complete") {
      return this.codeModelId || this.defaultModelId;
    }
    return this.defaultModelId;
  }

  async setActiveModel(modelId: string): Promise<void> {
    if (this.adapters[modelId]) {
      this.activeAdapterId = modelId;
    } else {
      this.defaultModelId = modelId;
    }
  }
}
