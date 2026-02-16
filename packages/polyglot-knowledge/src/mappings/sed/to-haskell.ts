import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("sed", "haskell");

export function sedToHaskell(code: string): TranslationResult {
  return translateWithFallback("sed", "haskell", code);
}

export const sedToHaskellRules = rules;
