import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("sas", "haskell");

export function sasToHaskell(code: string): TranslationResult {
  return translateWithFallback("sas", "haskell", code);
}

export const sasToHaskellRules = rules;
