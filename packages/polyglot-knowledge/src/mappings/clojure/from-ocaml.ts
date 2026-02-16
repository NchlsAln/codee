import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("ocaml", "clojure");

export function ocamlToClojure(code: string): TranslationResult {
  return translateWithFallback("ocaml", "clojure", code);
}

export const ocamlToClojureRules = rules;
