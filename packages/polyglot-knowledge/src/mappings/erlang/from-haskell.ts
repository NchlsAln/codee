import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("haskell", "erlang");

export function haskellToErlang(code: string): TranslationResult {
  return translateWithFallback("haskell", "erlang", code);
}

export const haskellToErlangRules = rules;
