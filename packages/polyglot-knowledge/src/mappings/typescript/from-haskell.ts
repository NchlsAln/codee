import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("haskell", "typescript");

export function haskellToTypeScript(code: string): TranslationResult {
  return translateWithFallback("haskell", "typescript", code);
}

export const haskellToTypeScriptRules = rules;
