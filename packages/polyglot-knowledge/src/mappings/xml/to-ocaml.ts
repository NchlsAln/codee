import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("xml", "ocaml");

export function xmlToOcaml(code: string): TranslationResult {
  return translateWithFallback("xml", "ocaml", code);
}

export const xmlToOcamlRules = rules;
