import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("clojure", "dart");

export function clojureToDart(code: string): TranslationResult {
  return translateWithFallback("clojure", "dart", code);
}

export const clojureToDartRules = rules;
