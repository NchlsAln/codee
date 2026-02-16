import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("r", "haskell");

export function rToHaskell(code: string): TranslationResult {
  return translateWithFallback("r", "haskell", code);
}

export const rToHaskellRules = rules;
