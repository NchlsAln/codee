import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("rust", "kotlin");

export function rustToKotlin(code: string): TranslationResult {
  return translateWithFallback("rust", "kotlin", code);
}

export const rustToKotlinRules = rules;
