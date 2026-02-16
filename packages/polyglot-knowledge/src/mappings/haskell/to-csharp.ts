import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("haskell", "csharp");

export function haskellToCsharp(code: string): TranslationResult {
  return translateWithFallback("haskell", "csharp", code);
}

export const haskellToCsharpRules = rules;
