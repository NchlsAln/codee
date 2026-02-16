import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("sed", "erlang");

export function sedToErlang(code: string): TranslationResult {
  return translateWithFallback("sed", "erlang", code);
}

export const sedToErlangRules = rules;
