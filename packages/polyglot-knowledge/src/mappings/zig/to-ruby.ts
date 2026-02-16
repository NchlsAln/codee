import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("zig", "ruby");

export function zigToRuby(code: string): TranslationResult {
  return translateWithFallback("zig", "ruby", code);
}

export const zigToRubyRules = rules;
