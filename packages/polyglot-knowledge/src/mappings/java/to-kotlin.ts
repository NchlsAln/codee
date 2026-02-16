import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("java", "kotlin");

export function javaToKotlin(code: string): TranslationResult {
  return translateWithFallback("java", "kotlin", code);
}

export const javaToKotlinRules = rules;
