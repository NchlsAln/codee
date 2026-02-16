import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("php", "kotlin");

export function phpToKotlin(code: string): TranslationResult {
  return translateWithFallback("php", "kotlin", code);
}

export const phpToKotlinRules = rules;
