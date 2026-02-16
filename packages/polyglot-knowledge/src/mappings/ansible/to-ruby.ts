import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("ansible", "ruby");

export function ansibleToRuby(code: string): TranslationResult {
  return translateWithFallback("ansible", "ruby", code);
}

export const ansibleToRubyRules = rules;
