import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("puppet", "kotlin");

export function puppetToKotlin(code: string): TranslationResult {
  return translateWithFallback("puppet", "kotlin", code);
}

export const puppetToKotlinRules = rules;
