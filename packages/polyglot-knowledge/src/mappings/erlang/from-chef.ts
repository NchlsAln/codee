import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("chef", "erlang");

export function chefToErlang(code: string): TranslationResult {
  return translateWithFallback("chef", "erlang", code);
}

export const chefToErlangRules = rules;
