import { TranslatedFile, TranslationStats } from "../types";
export declare class TranslationGit {
    createTranslationBranch(repoPath: string, sourceLang: TranslationStats["sourceLanguage"], targetLang: TranslationStats["targetLanguage"]): Promise<string>;
    stageTranslations(repoPath: string, translations: TranslatedFile[]): Promise<void>;
    createCommit(repoPath: string, stats: TranslationStats): Promise<string>;
    generateDiff(repoPath: string, _translations: TranslatedFile[]): Promise<string>;
    private writeTranslation;
}
