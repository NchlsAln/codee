import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("crystal", "ruby");

export function crystalToRuby(code: string): TranslationResult {
  return translateWithFallback("crystal", "ruby", code);
}

export const crystalToRubyRules = rules;
