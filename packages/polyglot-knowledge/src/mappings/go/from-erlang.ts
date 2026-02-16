import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("erlang", "go");

export function erlangToGo(code: string): TranslationResult {
  return translateWithFallback("erlang", "go", code);
}

export const erlangToGoRules = rules;
