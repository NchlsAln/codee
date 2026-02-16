import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("erlang", "cpp");

export function erlangToCpp(code: string): TranslationResult {
  return translateWithFallback("erlang", "cpp", code);
}

export const erlangToCppRules = rules;
