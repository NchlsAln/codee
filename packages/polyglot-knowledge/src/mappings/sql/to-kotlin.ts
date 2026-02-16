import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("sql", "kotlin");

export function sqlToKotlin(code: string): TranslationResult {
  return translateWithFallback("sql", "kotlin", code);
}

export const sqlToKotlinRules = rules;
