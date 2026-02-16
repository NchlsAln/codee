import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("zig", "php");

export function zigToPhp(code: string): TranslationResult {
  return translateWithFallback("zig", "php", code);
}

export const zigToPhpRules = rules;
