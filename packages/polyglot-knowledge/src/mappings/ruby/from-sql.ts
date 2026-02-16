import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("sql", "ruby");

export function sqlToRuby(code: string): TranslationResult {
  return translateWithFallback("sql", "ruby", code);
}

export const sqlToRubyRules = rules;
