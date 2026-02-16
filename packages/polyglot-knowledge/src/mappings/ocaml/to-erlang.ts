import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("ocaml", "erlang");

export function ocamlToErlang(code: string): TranslationResult {
  return translateWithFallback("ocaml", "erlang", code);
}

export const ocamlToErlangRules = rules;
