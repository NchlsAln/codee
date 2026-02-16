import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("sas", "kotlin");

export function sasToKotlin(code: string): TranslationResult {
  return translateWithFallback("sas", "kotlin", code);
}

export const sasToKotlinRules = rules;
