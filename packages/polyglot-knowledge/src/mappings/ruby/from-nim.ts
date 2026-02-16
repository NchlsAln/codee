import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("nim", "ruby");

export function nimToRuby(code: string): TranslationResult {
  return translateWithFallback("nim", "ruby", code);
}

export const nimToRubyRules = rules;
