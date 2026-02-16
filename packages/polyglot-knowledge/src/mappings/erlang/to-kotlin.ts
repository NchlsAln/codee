import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("erlang", "kotlin");

export function erlangToKotlin(code: string): TranslationResult {
  return translateWithFallback("erlang", "kotlin", code);
}

export const erlangToKotlinRules = rules;
