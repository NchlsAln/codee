import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("ocaml", "php");

export function ocamlToPhp(code: string): TranslationResult {
  return translateWithFallback("ocaml", "php", code);
}

export const ocamlToPhpRules = rules;
