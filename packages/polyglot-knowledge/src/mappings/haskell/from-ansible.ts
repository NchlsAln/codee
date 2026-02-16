import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("ansible", "haskell");

export function ansibleToHaskell(code: string): TranslationResult {
  return translateWithFallback("ansible", "haskell", code);
}

export const ansibleToHaskellRules = rules;
