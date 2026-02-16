import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("json", "haskell");

export function jsonToHaskell(code: string): TranslationResult {
  return translateWithFallback("json", "haskell", code);
}

export const jsonToHaskellRules = rules;
