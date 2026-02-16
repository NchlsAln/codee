import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("haskell", "go");

export function haskellToGo(code: string): TranslationResult {
  return translateWithFallback("haskell", "go", code);
}

export const haskellToGoRules = rules;
