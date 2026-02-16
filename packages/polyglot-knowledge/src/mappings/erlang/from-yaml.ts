import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("yaml", "erlang");

export function yamlToErlang(code: string): TranslationResult {
  return translateWithFallback("yaml", "erlang", code);
}

export const yamlToErlangRules = rules;
