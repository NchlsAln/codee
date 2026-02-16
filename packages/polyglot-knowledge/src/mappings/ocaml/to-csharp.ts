import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("ocaml", "csharp");

export function ocamlToCsharp(code: string): TranslationResult {
  return translateWithFallback("ocaml", "csharp", code);
}

export const ocamlToCsharpRules = rules;
