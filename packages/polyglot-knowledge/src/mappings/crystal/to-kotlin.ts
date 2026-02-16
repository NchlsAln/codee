import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("crystal", "kotlin");

export function crystalToKotlin(code: string): TranslationResult {
  return translateWithFallback("crystal", "kotlin", code);
}

export const crystalToKotlinRules = rules;
