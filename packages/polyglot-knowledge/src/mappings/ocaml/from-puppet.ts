import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("puppet", "ocaml");

export function puppetToOcaml(code: string): TranslationResult {
  return translateWithFallback("puppet", "ocaml", code);
}

export const puppetToOcamlRules = rules;
