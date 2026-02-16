import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("sql", "erlang");

export function sqlToErlang(code: string): TranslationResult {
  return translateWithFallback("sql", "erlang", code);
}

export const sqlToErlangRules = rules;
