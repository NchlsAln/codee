import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("julia", "erlang");

export function juliaToErlang(code: string): TranslationResult {
  return translateWithFallback("julia", "erlang", code);
}

export const juliaToErlangRules = rules;
