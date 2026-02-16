import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("bash", "kotlin");

export function bashToKotlin(code: string): TranslationResult {
  return translateWithFallback("bash", "kotlin", code);
}

export const bashToKotlinRules = rules;
