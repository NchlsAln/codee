import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("haskell", "dart");

export function haskellToDart(code: string): TranslationResult {
  return translateWithFallback("haskell", "dart", code);
}

export const haskellToDartRules = rules;
