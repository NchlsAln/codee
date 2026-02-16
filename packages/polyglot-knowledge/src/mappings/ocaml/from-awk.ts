import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("awk", "ocaml");

export function awkToOcaml(code: string): TranslationResult {
  return translateWithFallback("awk", "ocaml", code);
}

export const awkToOcamlRules = rules;
