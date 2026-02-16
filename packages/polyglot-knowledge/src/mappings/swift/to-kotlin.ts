import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("swift", "kotlin");

export function swiftToKotlin(code: string): TranslationResult {
  return translateWithFallback("swift", "kotlin", code);
}

export const swiftToKotlinRules = rules;
