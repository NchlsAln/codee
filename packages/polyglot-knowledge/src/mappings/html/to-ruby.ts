import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("html", "ruby");

export function htmlToRuby(code: string): TranslationResult {
  return translateWithFallback("html", "ruby", code);
}

export const htmlToRubyRules = rules;
