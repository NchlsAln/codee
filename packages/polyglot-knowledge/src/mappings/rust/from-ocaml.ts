import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("ocaml", "rust");

export function ocamlToRust(code: string): TranslationResult {
  return translateWithFallback("ocaml", "rust", code);
}

export const ocamlToRustRules = rules;
