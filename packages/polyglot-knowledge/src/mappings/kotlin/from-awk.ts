import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("awk", "kotlin");

export function awkToKotlin(code: string): TranslationResult {
  return translateWithFallback("awk", "kotlin", code);
}

export const awkToKotlinRules = rules;
