import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("matlab", "erlang");

export function matlabToErlang(code: string): TranslationResult {
  return translateWithFallback("matlab", "erlang", code);
}

export const matlabToErlangRules = rules;
