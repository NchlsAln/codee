import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("dockerfile", "ruby");

export function dockerfileToRuby(code: string): TranslationResult {
  return translateWithFallback("dockerfile", "ruby", code);
}

export const dockerfileToRubyRules = rules;
