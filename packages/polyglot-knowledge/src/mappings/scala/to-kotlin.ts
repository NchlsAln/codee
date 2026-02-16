import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("scala", "kotlin");

export function scalaToKotlin(code: string): TranslationResult {
  return translateWithFallback("scala", "kotlin", code);
}

export const scalaToKotlinRules = rules;
