import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("bash", "ruby");

export function bashToRuby(code: string): TranslationResult {
  return translateWithFallback("bash", "ruby", code);
}

export const bashToRubyRules = rules;
