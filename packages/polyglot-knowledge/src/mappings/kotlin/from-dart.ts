import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("dart", "kotlin");

export function dartToKotlin(code: string): TranslationResult {
  return translateWithFallback("dart", "kotlin", code);
}

export const dartToKotlinRules = rules;
