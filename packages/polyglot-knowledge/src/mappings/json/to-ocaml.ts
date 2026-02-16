import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("json", "ocaml");

export function jsonToOcaml(code: string): TranslationResult {
  return translateWithFallback("json", "ocaml", code);
}

export const jsonToOcamlRules = rules;
