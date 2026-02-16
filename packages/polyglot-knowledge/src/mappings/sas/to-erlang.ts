import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("sas", "erlang");

export function sasToErlang(code: string): TranslationResult {
  return translateWithFallback("sas", "erlang", code);
}

export const sasToErlangRules = rules;
