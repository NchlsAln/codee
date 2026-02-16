import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("sas", "ocaml");

export function sasToOcaml(code: string): TranslationResult {
  return translateWithFallback("sas", "ocaml", code);
}

export const sasToOcamlRules = rules;
