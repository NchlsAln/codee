import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("haskell", "ruby");

export function haskellToRuby(code: string): TranslationResult {
  return translateWithFallback("haskell", "ruby", code);
}

export const haskellToRubyRules = rules;
