import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("rust", "csharp");

export function rustToCsharp(code: string): TranslationResult {
  return translateWithFallback("rust", "csharp", code);
}

export const rustToCsharpRules = rules;
