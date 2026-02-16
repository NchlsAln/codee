import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("sed", "kotlin");

export function sedToKotlin(code: string): TranslationResult {
  return translateWithFallback("sed", "kotlin", code);
}

export const sedToKotlinRules = rules;
