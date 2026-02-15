import { BaseAdapter } from "./BaseAdapter";
import { CodeeConfig } from "../config/types";
export interface ModelSelection {
    adapter: BaseAdapter;
    modelId: string;
    temperature: number;
}
export declare class ModelRouter {
    private activeAdapterId;
    private defaultModelId;
    private chatModelId;
    private codeModelId;
    private embeddingModelId;
    private temperature;
    private endpoint;
    private allowCloud;
    private pinnedCertificates;
    private mockEnabled;
    private readonly adapters;
    initialize(): Promise<void>;
    applyConfig(config: CodeeConfig): void;
    selectModel(task: string, languageId: string): ModelSelection;
    resolveEmbeddingModel(): ModelSelection;
    getActiveAdapter(): BaseAdapter;
    private getAdapter;
    private resolveModelId;
    setActiveModel(modelId: string): Promise<void>;
}
