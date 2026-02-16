import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("ansible", "erlang");

export function ansibleToErlang(code: string): TranslationResult {
  return translateWithFallback("ansible", "erlang", code);
}

export const ansibleToErlangRules = rules;
