import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("sed", "ocaml");

export function sedToOcaml(code: string): TranslationResult {
  return translateWithFallback("sed", "ocaml", code);
}

export const sedToOcamlRules = rules;
