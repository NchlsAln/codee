import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("zig", "csharp");

export function zigToCsharp(code: string): TranslationResult {
  return translateWithFallback("zig", "csharp", code);
}

export const zigToCsharpRules = rules;
