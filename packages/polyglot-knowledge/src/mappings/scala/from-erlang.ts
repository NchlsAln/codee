import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("erlang", "scala");

export function erlangToScala(code: string): TranslationResult {
  return translateWithFallback("erlang", "scala", code);
}

export const erlangToScalaRules = rules;
