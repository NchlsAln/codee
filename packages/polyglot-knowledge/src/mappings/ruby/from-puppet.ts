import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("puppet", "ruby");

export function puppetToRuby(code: string): TranslationResult {
  return translateWithFallback("puppet", "ruby", code);
}

export const puppetToRubyRules = rules;
