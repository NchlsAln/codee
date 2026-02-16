import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("chef", "ruby");

export function chefToRuby(code: string): TranslationResult {
  return translateWithFallback("chef", "ruby", code);
}

export const chefToRubyRules = rules;
