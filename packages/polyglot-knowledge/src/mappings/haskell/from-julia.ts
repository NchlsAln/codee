import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("julia", "haskell");

export function juliaToHaskell(code: string): TranslationResult {
  return translateWithFallback("julia", "haskell", code);
}

export const juliaToHaskellRules = rules;
