import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("r", "kotlin");

export function rToKotlin(code: string): TranslationResult {
  return translateWithFallback("r", "kotlin", code);
}

export const rToKotlinRules = rules;
