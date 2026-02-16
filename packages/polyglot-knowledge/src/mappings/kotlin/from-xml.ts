import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("xml", "kotlin");

export function xmlToKotlin(code: string): TranslationResult {
  return translateWithFallback("xml", "kotlin", code);
}

export const xmlToKotlinRules = rules;
