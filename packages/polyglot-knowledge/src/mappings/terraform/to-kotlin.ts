import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("terraform", "kotlin");

export function terraformToKotlin(code: string): TranslationResult {
  return translateWithFallback("terraform", "kotlin", code);
}

export const terraformToKotlinRules = rules;
