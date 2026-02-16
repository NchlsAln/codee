import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("ruby", "kotlin");

export function rubyToKotlin(code: string): TranslationResult {
  return translateWithFallback("ruby", "kotlin", code);
}

export const rubyToKotlinRules = rules;
