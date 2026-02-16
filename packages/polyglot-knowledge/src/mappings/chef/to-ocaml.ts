import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("chef", "ocaml");

export function chefToOcaml(code: string): TranslationResult {
  return translateWithFallback("chef", "ocaml", code);
}

export const chefToOcamlRules = rules;
