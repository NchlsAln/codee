import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("haskell", "rust");

export function haskellToRust(code: string): TranslationResult {
  return translateWithFallback("haskell", "rust", code);
}

export const haskellToRustRules = rules;
