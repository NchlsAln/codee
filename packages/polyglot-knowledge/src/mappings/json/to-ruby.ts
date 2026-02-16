import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("json", "ruby");

export function jsonToRuby(code: string): TranslationResult {
  return translateWithFallback("json", "ruby", code);
}

export const jsonToRubyRules = rules;
