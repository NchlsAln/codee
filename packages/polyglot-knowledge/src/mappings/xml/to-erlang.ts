import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("xml", "erlang");

export function xmlToErlang(code: string): TranslationResult {
  return translateWithFallback("xml", "erlang", code);
}

export const xmlToErlangRules = rules;
