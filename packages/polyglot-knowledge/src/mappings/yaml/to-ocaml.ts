import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("yaml", "ocaml");

export function yamlToOcaml(code: string): TranslationResult {
  return translateWithFallback("yaml", "ocaml", code);
}

export const yamlToOcamlRules = rules;
