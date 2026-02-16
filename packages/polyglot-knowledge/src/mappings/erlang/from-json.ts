import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("json", "erlang");

export function jsonToErlang(code: string): TranslationResult {
  return translateWithFallback("json", "erlang", code);
}

export const jsonToErlangRules = rules;
