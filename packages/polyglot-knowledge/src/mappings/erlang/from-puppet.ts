import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("puppet", "erlang");

export function puppetToErlang(code: string): TranslationResult {
  return translateWithFallback("puppet", "erlang", code);
}

export const puppetToErlangRules = rules;
