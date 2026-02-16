import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("html", "haskell");

export function htmlToHaskell(code: string): TranslationResult {
  return translateWithFallback("html", "haskell", code);
}

export const htmlToHaskellRules = rules;
