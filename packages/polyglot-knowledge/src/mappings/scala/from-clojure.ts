import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("clojure", "scala");

export function clojureToScala(code: string): TranslationResult {
  return translateWithFallback("clojure", "scala", code);
}

export const clojureToScalaRules = rules;
