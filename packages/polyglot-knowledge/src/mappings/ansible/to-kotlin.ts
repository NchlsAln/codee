import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("ansible", "kotlin");

export function ansibleToKotlin(code: string): TranslationResult {
  return translateWithFallback("ansible", "kotlin", code);
}

export const ansibleToKotlinRules = rules;
