import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("bash", "ocaml");

export function bashToOcaml(code: string): TranslationResult {
  return translateWithFallback("bash", "ocaml", code);
}

export const bashToOcamlRules = rules;
