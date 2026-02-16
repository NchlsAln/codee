import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("java", "csharp");

export function javaToCsharp(code: string): TranslationResult {
  return translateWithFallback("java", "csharp", code);
}

export const javaToCsharpRules = rules;
