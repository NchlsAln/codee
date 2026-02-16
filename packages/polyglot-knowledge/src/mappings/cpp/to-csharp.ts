import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("cpp", "csharp");

export function cppToCsharp(code: string): TranslationResult {
  return translateWithFallback("cpp", "csharp", code);
}

export const cppToCsharpRules = rules;
