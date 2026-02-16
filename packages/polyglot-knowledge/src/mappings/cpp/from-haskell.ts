import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("haskell", "cpp");

export function haskellToCpp(code: string): TranslationResult {
  return translateWithFallback("haskell", "cpp", code);
}

export const haskellToCppRules = rules;
