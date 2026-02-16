import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("clojure", "cpp");

export function clojureToCpp(code: string): TranslationResult {
  return translateWithFallback("clojure", "cpp", code);
}

export const clojureToCppRules = rules;
