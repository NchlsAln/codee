import {
  extractConceptsFromCode,
  detectPatternMatches,
  listConcepts,
  listConceptImplementations,
  translateCode,
  type TranslationResult,
  type LanguageId,
  type PatternMatch,
  type ConceptImplementation
} from "@codee/polyglot-knowledge";

export class PolyglotTranslator {
  listConcepts() {
    return listConcepts();
  }

  extractConcepts(code: string): string[] {
    return extractConceptsFromCode(code);
  }

  detectPatterns(code: string, language: LanguageId): PatternMatch[] {
    return detectPatternMatches(code, language);
  }

  listConceptImplementations(): Record<string, ConceptImplementation[]> {
    return listConceptImplementations();
  }

  translate(from: LanguageId, to: LanguageId, code: string, options?: import("@codee/polyglot-knowledge").TranslationOptions): TranslationResult {
    return translateCode(from, to, code, options);
  }
}
