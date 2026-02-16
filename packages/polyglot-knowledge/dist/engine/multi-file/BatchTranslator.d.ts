import { BatchTranslationOptions, BatchTranslationResult, ProjectStructure, ProjectTranslationResult } from "../../types";
export declare class BatchTranslator {
    private readonly projectRoot;
    private readonly analyzer;
    private readonly mapper;
    private readonly typeRegistry;
    private queue;
    private nextJobIndex;
    constructor(projectRoot: string);
    translate(options: BatchTranslationOptions): Promise<BatchTranslationResult>;
    translateProject(structure: ProjectStructure, targetLanguage: ProjectTranslationResult["targetLanguage"], onProgress: (completed: number, total: number) => void): Promise<ProjectTranslationResult>;
    private runWorker;
    private nextJob;
    private buildQueue;
    private computePriorities;
    private translateFile;
    private mapTargetPath;
    private mapTargetPathInPlace;
    private resolveStatus;
}
