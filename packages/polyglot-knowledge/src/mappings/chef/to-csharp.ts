import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("chef", "csharp");

export function chefToCsharp(code: string): TranslationResult {
  return translateWithFallback("chef", "csharp", code);
}

export const chefToCsharpRules = rules;
