import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("matlab", "csharp");

export function matlabToCsharp(code: string): TranslationResult {
  return translateWithFallback("matlab", "csharp", code);
}

export const matlabToCsharpRules = rules;
