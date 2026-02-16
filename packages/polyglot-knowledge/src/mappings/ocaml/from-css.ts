import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("css", "ocaml");

export function cssToOcaml(code: string): TranslationResult {
  return translateWithFallback("css", "ocaml", code);
}

export const cssToOcamlRules = rules;
