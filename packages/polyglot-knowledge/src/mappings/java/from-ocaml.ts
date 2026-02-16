import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("ocaml", "java");

export function ocamlToJava(code: string): TranslationResult {
  return translateWithFallback("ocaml", "java", code);
}

export const ocamlToJavaRules = rules;
