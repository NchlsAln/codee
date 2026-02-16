import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("kotlin", "csharp");

export function kotlinToCsharp(code: string): TranslationResult {
  return translateWithFallback("kotlin", "csharp", code);
}

export const kotlinToCsharpRules = rules;
