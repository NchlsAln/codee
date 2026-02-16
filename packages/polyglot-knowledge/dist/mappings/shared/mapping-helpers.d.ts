import type { ConceptMappingRule, LanguageId, TranslationOptions, TranslationResult } from "../../types";
export declare function buildDefaultRules(from: LanguageId, to: LanguageId): ConceptMappingRule[];
export declare function translateWithFallback(from: LanguageId, to: LanguageId, code: string, options?: TranslationOptions): TranslationResult;
