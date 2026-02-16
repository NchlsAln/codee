import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("scss", "ocaml");

export function scssToOcaml(code: string): TranslationResult {
  return translateWithFallback("scss", "ocaml", code);
}

export const scssToOcamlRules = rules;
