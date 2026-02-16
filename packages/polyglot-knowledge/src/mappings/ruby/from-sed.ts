import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("sed", "ruby");

export function sedToRuby(code: string): TranslationResult {
  return translateWithFallback("sed", "ruby", code);
}

export const sedToRubyRules = rules;
