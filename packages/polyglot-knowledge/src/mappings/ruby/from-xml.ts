import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("xml", "ruby");

export function xmlToRuby(code: string): TranslationResult {
  return translateWithFallback("xml", "ruby", code);
}

export const xmlToRubyRules = rules;
