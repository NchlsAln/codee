import { type BatchTranslationOptions, type BatchTranslationResult, type ProjectAnalysis } from "@codee/polyglot-knowledge";
export interface ProjectTranslationOptions extends BatchTranslationOptions {
}
export declare class ProjectTranslator {
    private readonly projectRoot;
    private readonly analyzer;
    private readonly translator;
    constructor(projectRoot: string);
    analyzeProject(language: ProjectTranslationOptions["from"]): Promise<ProjectAnalysis>;
    translateProject(options: ProjectTranslationOptions): Promise<BatchTranslationResult>;
}
