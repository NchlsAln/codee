import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("csharp", "kotlin");

export function csharpToKotlin(code: string): TranslationResult {
  return translateWithFallback("csharp", "kotlin", code);
}

export const csharpToKotlinRules = rules;
