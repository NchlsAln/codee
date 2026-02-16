import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("ocaml", "swift");

export function ocamlToSwift(code: string): TranslationResult {
  return translateWithFallback("ocaml", "swift", code);
}

export const ocamlToSwiftRules = rules;
