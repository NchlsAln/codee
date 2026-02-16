import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("terraform", "ocaml");

export function terraformToOcaml(code: string): TranslationResult {
  return translateWithFallback("terraform", "ocaml", code);
}

export const terraformToOcamlRules = rules;
