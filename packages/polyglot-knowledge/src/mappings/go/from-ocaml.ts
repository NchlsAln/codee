import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("ocaml", "go");

export function ocamlToGo(code: string): TranslationResult {
  return translateWithFallback("ocaml", "go", code);
}

export const ocamlToGoRules = rules;
