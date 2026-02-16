import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("sed", "csharp");

export function sedToCsharp(code: string): TranslationResult {
  return translateWithFallback("sed", "csharp", code);
}

export const sedToCsharpRules = rules;
