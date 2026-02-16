import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("clojure", "typescript");

export function clojureToTypeScript(code: string): TranslationResult {
  return translateWithFallback("clojure", "typescript", code);
}

export const clojureToTypeScriptRules = rules;
