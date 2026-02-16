export interface TranslationCommitSummary {
    title: string;
    bodyLines: string[];
    files: string[];
}
export declare class TranslationCommit {
    private readonly projectRoot;
    private readonly git;
    constructor(projectRoot: string);
    createCommit(summary: TranslationCommitSummary): Promise<void>;
}
