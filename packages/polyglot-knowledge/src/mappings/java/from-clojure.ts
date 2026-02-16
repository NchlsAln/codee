import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("clojure", "java");

export function clojureToJava(code: string): TranslationResult {
  return translateWithFallback("clojure", "java", code);
}

export const clojureToJavaRules = rules;
