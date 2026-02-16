import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("go", "csharp");

export function goToCsharp(code: string): TranslationResult {
  return translateWithFallback("go", "csharp", code);
}

export const goToCsharpRules = rules;
