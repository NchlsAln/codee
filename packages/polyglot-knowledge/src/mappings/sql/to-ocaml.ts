import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("sql", "ocaml");

export function sqlToOcaml(code: string): TranslationResult {
  return translateWithFallback("sql", "ocaml", code);
}

export const sqlToOcamlRules = rules;
