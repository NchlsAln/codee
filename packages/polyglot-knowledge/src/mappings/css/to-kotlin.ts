import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("css", "kotlin");

export function cssToKotlin(code: string): TranslationResult {
  return translateWithFallback("css", "kotlin", code);
}

export const cssToKotlinRules = rules;
