import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("css", "erlang");

export function cssToErlang(code: string): TranslationResult {
  return translateWithFallback("css", "erlang", code);
}

export const cssToErlangRules = rules;
