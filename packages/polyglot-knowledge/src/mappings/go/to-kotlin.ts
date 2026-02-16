import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("go", "kotlin");

export function goToKotlin(code: string): TranslationResult {
  return translateWithFallback("go", "kotlin", code);
}

export const goToKotlinRules = rules;
