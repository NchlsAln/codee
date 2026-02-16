import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("clojure", "swift");

export function clojureToSwift(code: string): TranslationResult {
  return translateWithFallback("clojure", "swift", code);
}

export const clojureToSwiftRules = rules;
