import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("matlab", "kotlin");

export function matlabToKotlin(code: string): TranslationResult {
  return translateWithFallback("matlab", "kotlin", code);
}

export const matlabToKotlinRules = rules;
