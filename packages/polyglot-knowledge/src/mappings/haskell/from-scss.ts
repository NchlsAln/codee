import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("scss", "haskell");

export function scssToHaskell(code: string): TranslationResult {
  return translateWithFallback("scss", "haskell", code);
}

export const scssToHaskellRules = rules;
