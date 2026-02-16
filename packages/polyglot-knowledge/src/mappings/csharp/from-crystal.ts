import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("crystal", "csharp");

export function crystalToCsharp(code: string): TranslationResult {
  return translateWithFallback("crystal", "csharp", code);
}

export const crystalToCsharpRules = rules;
