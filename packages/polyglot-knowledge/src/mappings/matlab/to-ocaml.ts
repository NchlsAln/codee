import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("matlab", "ocaml");

export function matlabToOcaml(code: string): TranslationResult {
  return translateWithFallback("matlab", "ocaml", code);
}

export const matlabToOcamlRules = rules;
