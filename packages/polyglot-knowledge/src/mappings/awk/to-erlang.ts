import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("awk", "erlang");

export function awkToErlang(code: string): TranslationResult {
  return translateWithFallback("awk", "erlang", code);
}

export const awkToErlangRules = rules;
