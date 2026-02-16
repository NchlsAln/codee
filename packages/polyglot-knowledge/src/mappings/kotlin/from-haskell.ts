import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("haskell", "kotlin");

export function haskellToKotlin(code: string): TranslationResult {
  return translateWithFallback("haskell", "kotlin", code);
}

export const haskellToKotlinRules = rules;
