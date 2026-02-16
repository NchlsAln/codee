import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("awk", "haskell");

export function awkToHaskell(code: string): TranslationResult {
  return translateWithFallback("awk", "haskell", code);
}

export const awkToHaskellRules = rules;
