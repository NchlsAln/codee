import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("bash", "erlang");

export function bashToErlang(code: string): TranslationResult {
  return translateWithFallback("bash", "erlang", code);
}

export const bashToErlangRules = rules;
