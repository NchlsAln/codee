import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("dart", "csharp");

export function dartToCsharp(code: string): TranslationResult {
  return translateWithFallback("dart", "csharp", code);
}

export const dartToCsharpRules = rules;
