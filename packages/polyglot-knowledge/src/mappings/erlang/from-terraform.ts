import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("terraform", "erlang");

export function terraformToErlang(code: string): TranslationResult {
  return translateWithFallback("terraform", "erlang", code);
}

export const terraformToErlangRules = rules;
