import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("css", "csharp");

export function cssToCsharp(code: string): TranslationResult {
  return translateWithFallback("css", "csharp", code);
}

export const cssToCsharpRules = rules;
