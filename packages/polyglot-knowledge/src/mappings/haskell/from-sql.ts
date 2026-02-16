import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("sql", "haskell");

export function sqlToHaskell(code: string): TranslationResult {
  return translateWithFallback("sql", "haskell", code);
}

export const sqlToHaskellRules = rules;
