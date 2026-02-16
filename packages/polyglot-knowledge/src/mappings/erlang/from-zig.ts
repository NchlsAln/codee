import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("zig", "erlang");

export function zigToErlang(code: string): TranslationResult {
  return translateWithFallback("zig", "erlang", code);
}

export const zigToErlangRules = rules;
