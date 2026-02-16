import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("nim", "kotlin");

export function nimToKotlin(code: string): TranslationResult {
  return translateWithFallback("nim", "kotlin", code);
}

export const nimToKotlinRules = rules;
