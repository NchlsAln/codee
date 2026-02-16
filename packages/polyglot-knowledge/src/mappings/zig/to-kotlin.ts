import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("zig", "kotlin");

export function zigToKotlin(code: string): TranslationResult {
  return translateWithFallback("zig", "kotlin", code);
}

export const zigToKotlinRules = rules;
