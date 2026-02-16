import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("ocaml", "kotlin");

export function ocamlToKotlin(code: string): TranslationResult {
  return translateWithFallback("ocaml", "kotlin", code);
}

export const ocamlToKotlinRules = rules;
