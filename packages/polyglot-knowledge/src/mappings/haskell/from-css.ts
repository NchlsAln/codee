import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("css", "haskell");

export function cssToHaskell(code: string): TranslationResult {
  return translateWithFallback("css", "haskell", code);
}

export const cssToHaskellRules = rules;
