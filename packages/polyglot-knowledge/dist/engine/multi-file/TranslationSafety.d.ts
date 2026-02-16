import { PreCheckResult, PostCheckResult, TranslatedFile, LanguageId } from "../../types";
export declare class TranslationSafety {
    validatePreConditions(repoPath: string): Promise<PreCheckResult>;
    validatePostTranslation(translations: TranslatedFile[], targetLang: LanguageId): Promise<PostCheckResult>;
    private isGitClean;
    private countFiles;
    private checkSourceTests;
    private collectSuggestions;
}
