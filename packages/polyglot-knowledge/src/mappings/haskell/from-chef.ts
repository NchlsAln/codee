import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("chef", "haskell");

export function chefToHaskell(code: string): TranslationResult {
  return translateWithFallback("chef", "haskell", code);
}

export const chefToHaskellRules = rules;
