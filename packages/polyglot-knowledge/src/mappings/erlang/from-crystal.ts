import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("crystal", "erlang");

export function crystalToErlang(code: string): TranslationResult {
  return translateWithFallback("crystal", "erlang", code);
}

export const crystalToErlangRules = rules;
