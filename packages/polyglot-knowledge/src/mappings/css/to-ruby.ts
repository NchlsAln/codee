import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("css", "ruby");

export function cssToRuby(code: string): TranslationResult {
  return translateWithFallback("css", "ruby", code);
}

export const cssToRubyRules = rules;
