import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("bash", "haskell");

export function bashToHaskell(code: string): TranslationResult {
  return translateWithFallback("bash", "haskell", code);
}

export const bashToHaskellRules = rules;
