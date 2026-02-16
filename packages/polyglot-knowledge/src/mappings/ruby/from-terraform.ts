import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("terraform", "ruby");

export function terraformToRuby(code: string): TranslationResult {
  return translateWithFallback("terraform", "ruby", code);
}

export const terraformToRubyRules = rules;
