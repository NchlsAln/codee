import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("clojure", "go");

export function clojureToGo(code: string): TranslationResult {
  return translateWithFallback("clojure", "go", code);
}

export const clojureToGoRules = rules;
