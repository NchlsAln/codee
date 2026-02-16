import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("json", "kotlin");

export function jsonToKotlin(code: string): TranslationResult {
  return translateWithFallback("json", "kotlin", code);
}

export const jsonToKotlinRules = rules;
