import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("r", "ruby");

export function rToRuby(code: string): TranslationResult {
  return translateWithFallback("r", "ruby", code);
}

export const rToRubyRules = rules;
