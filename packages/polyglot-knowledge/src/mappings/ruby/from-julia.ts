import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("julia", "ruby");

export function juliaToRuby(code: string): TranslationResult {
  return translateWithFallback("julia", "ruby", code);
}

export const juliaToRubyRules = rules;
