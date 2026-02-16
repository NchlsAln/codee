import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("haskell", "elixir");

export function haskellToElixir(code: string): TranslationResult {
  return translateWithFallback("haskell", "elixir", code);
}

export const haskellToElixirRules = rules;
