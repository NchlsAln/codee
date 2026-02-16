import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("chef", "kotlin");

export function chefToKotlin(code: string): TranslationResult {
  return translateWithFallback("chef", "kotlin", code);
}

export const chefToKotlinRules = rules;
