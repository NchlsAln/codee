import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("scss", "kotlin");

export function scssToKotlin(code: string): TranslationResult {
  return translateWithFallback("scss", "kotlin", code);
}

export const scssToKotlinRules = rules;
