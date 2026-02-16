import { LanguageId } from "../types";
export declare class TranslationBranch {
    private readonly projectRoot;
    private readonly git;
    constructor(projectRoot: string);
    createBranch(from: LanguageId, to: LanguageId, date?: Date): Promise<string>;
    checkout(branchName: string): Promise<void>;
    deleteBranch(branchName: string): Promise<void>;
}
