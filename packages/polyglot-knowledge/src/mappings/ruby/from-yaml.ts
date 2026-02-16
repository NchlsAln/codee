import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("yaml", "ruby");

export function yamlToRuby(code: string): TranslationResult {
  return translateWithFallback("yaml", "ruby", code);
}

export const yamlToRubyRules = rules;
