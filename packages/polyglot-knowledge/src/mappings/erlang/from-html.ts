import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("html", "erlang");

export function htmlToErlang(code: string): TranslationResult {
  return translateWithFallback("html", "erlang", code);
}

export const htmlToErlangRules = rules;
