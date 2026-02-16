import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("haskell", "php");

export function haskellToPhp(code: string): TranslationResult {
  return translateWithFallback("haskell", "php", code);
}

export const haskellToPhpRules = rules;
