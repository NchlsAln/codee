import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("haskell", "swift");

export function haskellToSwift(code: string): TranslationResult {
  return translateWithFallback("haskell", "swift", code);
}

export const haskellToSwiftRules = rules;
