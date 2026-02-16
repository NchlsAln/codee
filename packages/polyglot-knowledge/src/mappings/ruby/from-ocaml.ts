import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("ocaml", "ruby");

export function ocamlToRuby(code: string): TranslationResult {
  return translateWithFallback("ocaml", "ruby", code);
}

export const ocamlToRubyRules = rules;
