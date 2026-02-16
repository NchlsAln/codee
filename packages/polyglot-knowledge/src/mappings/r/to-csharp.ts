import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("r", "csharp");

export function rToCsharp(code: string): TranslationResult {
  return translateWithFallback("r", "csharp", code);
}

export const rToCsharpRules = rules;
