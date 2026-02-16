import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("powershell", "clojure");

export function powershellToClojure(code: string): TranslationResult {
  return translateWithFallback("powershell", "clojure", code);
}

export const powershellToClojureRules = rules;
