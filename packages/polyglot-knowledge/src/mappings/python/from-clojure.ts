import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("clojure", "python");

export function clojureToPython(code: string): TranslationResult {
  return translateWithFallback("clojure", "python", code);
}

export const clojureToPythonRules = rules;
