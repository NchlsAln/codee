import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("julia", "ocaml");

export function juliaToOcaml(code: string): TranslationResult {
  return translateWithFallback("julia", "ocaml", code);
}

export const juliaToOcamlRules = rules;
