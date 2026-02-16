import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("nim", "erlang");

export function nimToErlang(code: string): TranslationResult {
  return translateWithFallback("nim", "erlang", code);
}

export const nimToErlangRules = rules;
