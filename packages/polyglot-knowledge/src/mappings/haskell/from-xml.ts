import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("xml", "haskell");

export function xmlToHaskell(code: string): TranslationResult {
  return translateWithFallback("xml", "haskell", code);
}

export const xmlToHaskellRules = rules;
