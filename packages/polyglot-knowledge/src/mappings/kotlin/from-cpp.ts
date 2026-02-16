import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("cpp", "kotlin");

export function cppToKotlin(code: string): TranslationResult {
  return translateWithFallback("cpp", "kotlin", code);
}

export const cppToKotlinRules = rules;
