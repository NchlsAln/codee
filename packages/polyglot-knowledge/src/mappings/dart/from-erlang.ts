import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("erlang", "dart");

export function erlangToDart(code: string): TranslationResult {
  return translateWithFallback("erlang", "dart", code);
}

export const erlangToDartRules = rules;
