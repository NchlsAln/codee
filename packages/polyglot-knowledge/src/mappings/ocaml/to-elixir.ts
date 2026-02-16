import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("ocaml", "elixir");

export function ocamlToElixir(code: string): TranslationResult {
  return translateWithFallback("ocaml", "elixir", code);
}

export const ocamlToElixirRules = rules;
