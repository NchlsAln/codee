import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("dockerfile", "haskell");

export function dockerfileToHaskell(code: string): TranslationResult {
  return translateWithFallback("dockerfile", "haskell", code);
}

export const dockerfileToHaskellRules = rules;
