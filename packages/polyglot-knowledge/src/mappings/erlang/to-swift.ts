import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("erlang", "swift");

export function erlangToSwift(code: string): TranslationResult {
  return translateWithFallback("erlang", "swift", code);
}

export const erlangToSwiftRules = rules;
