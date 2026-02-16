import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("ocaml", "cpp");

export function ocamlToCpp(code: string): TranslationResult {
  return translateWithFallback("ocaml", "cpp", code);
}

export const ocamlToCppRules = rules;
