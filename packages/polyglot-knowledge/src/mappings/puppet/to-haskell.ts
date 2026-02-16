import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("puppet", "haskell");

export function puppetToHaskell(code: string): TranslationResult {
  return translateWithFallback("puppet", "haskell", code);
}

export const puppetToHaskellRules = rules;
