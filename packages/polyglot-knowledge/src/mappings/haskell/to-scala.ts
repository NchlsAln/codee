import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("haskell", "scala");

export function haskellToScala(code: string): TranslationResult {
  return translateWithFallback("haskell", "scala", code);
}

export const haskellToScalaRules = rules;
