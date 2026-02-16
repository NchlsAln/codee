import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("awk", "csharp");

export function awkToCsharp(code: string): TranslationResult {
  return translateWithFallback("awk", "csharp", code);
}

export const awkToCsharpRules = rules;
