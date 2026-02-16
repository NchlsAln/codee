import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("html", "ocaml");

export function htmlToOcaml(code: string): TranslationResult {
  return translateWithFallback("html", "ocaml", code);
}

export const htmlToOcamlRules = rules;
