import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("dockerfile", "erlang");

export function dockerfileToErlang(code: string): TranslationResult {
  return translateWithFallback("dockerfile", "erlang", code);
}

export const dockerfileToErlangRules = rules;
