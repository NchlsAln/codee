import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("haskell", "clojure");

export function haskellToClojure(code: string): TranslationResult {
  return translateWithFallback("haskell", "clojure", code);
}

export const haskellToClojureRules = rules;
