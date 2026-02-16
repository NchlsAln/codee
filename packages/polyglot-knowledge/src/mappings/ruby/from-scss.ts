import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("scss", "ruby");

export function scssToRuby(code: string): TranslationResult {
  return translateWithFallback("scss", "ruby", code);
}

export const scssToRubyRules = rules;
