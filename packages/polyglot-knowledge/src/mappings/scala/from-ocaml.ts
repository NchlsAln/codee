import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("ocaml", "scala");

export function ocamlToScala(code: string): TranslationResult {
  return translateWithFallback("ocaml", "scala", code);
}

export const ocamlToScalaRules = rules;
