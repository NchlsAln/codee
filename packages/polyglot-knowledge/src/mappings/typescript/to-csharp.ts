import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("typescript", "csharp");

export function typescriptToCsharp(code: string): TranslationResult {
  return translateWithFallback("typescript", "csharp", code);
}

export const typescriptToCsharpRules = rules;
