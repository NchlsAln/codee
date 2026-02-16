import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("r", "erlang");

export function rToErlang(code: string): TranslationResult {
  return translateWithFallback("r", "erlang", code);
}

export const rToErlangRules = rules;
