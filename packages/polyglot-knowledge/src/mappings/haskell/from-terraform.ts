import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("terraform", "haskell");

export function terraformToHaskell(code: string): TranslationResult {
  return translateWithFallback("terraform", "haskell", code);
}

export const terraformToHaskellRules = rules;
