import { type TranslationResult, type LanguageId, type PatternMatch, type ConceptImplementation } from "@codee/polyglot-knowledge";
export declare class PolyglotTranslator {
    listConcepts(): import("@codee/polyglot-knowledge").ConceptDefinition[];
    extractConcepts(code: string): string[];
    detectPatterns(code: string, language: LanguageId): PatternMatch[];
    listConceptImplementations(): Record<string, ConceptImplementation[]>;
    translate(from: LanguageId, to: LanguageId, code: string, options?: import("@codee/polyglot-knowledge").TranslationOptions): TranslationResult;
}
