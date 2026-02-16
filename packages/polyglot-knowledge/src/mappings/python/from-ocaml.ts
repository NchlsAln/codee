import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("ocaml", "python");

export function ocamlToPython(code: string): TranslationResult {
  return translateWithFallback("ocaml", "python", code);
}

export const ocamlToPythonRules = rules;
