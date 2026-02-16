import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("matlab", "haskell");

export function matlabToHaskell(code: string): TranslationResult {
  return translateWithFallback("matlab", "haskell", code);
}

export const matlabToHaskellRules = rules;
