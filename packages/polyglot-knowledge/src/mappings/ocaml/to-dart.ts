import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("ocaml", "dart");

export function ocamlToDart(code: string): TranslationResult {
  return translateWithFallback("ocaml", "dart", code);
}

export const ocamlToDartRules = rules;
