import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("ansible", "ocaml");

export function ansibleToOcaml(code: string): TranslationResult {
  return translateWithFallback("ansible", "ocaml", code);
}

export const ansibleToOcamlRules = rules;
