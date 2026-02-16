import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("scss", "erlang");

export function scssToErlang(code: string): TranslationResult {
  return translateWithFallback("scss", "erlang", code);
}

export const scssToErlangRules = rules;
