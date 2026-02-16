import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("julia", "kotlin");

export function juliaToKotlin(code: string): TranslationResult {
  return translateWithFallback("julia", "kotlin", code);
}

export const juliaToKotlinRules = rules;
