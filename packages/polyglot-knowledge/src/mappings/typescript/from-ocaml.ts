import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("ocaml", "typescript");

export function ocamlToTypeScript(code: string): TranslationResult {
  return translateWithFallback("ocaml", "typescript", code);
}

export const ocamlToTypeScriptRules = rules;
