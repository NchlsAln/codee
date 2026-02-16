import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("awk", "ruby");

export function awkToRuby(code: string): TranslationResult {
  return translateWithFallback("awk", "ruby", code);
}

export const awkToRubyRules = rules;
