import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("matlab", "ruby");

export function matlabToRuby(code: string): TranslationResult {
  return translateWithFallback("matlab", "ruby", code);
}

export const matlabToRubyRules = rules;
