import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("sas", "ruby");

export function sasToRuby(code: string): TranslationResult {
  return translateWithFallback("sas", "ruby", code);
}

export const sasToRubyRules = rules;
