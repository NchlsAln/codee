import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("r", "ocaml");

export function rToOcaml(code: string): TranslationResult {
  return translateWithFallback("r", "ocaml", code);
}

export const rToOcamlRules = rules;
