import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("nim", "csharp");

export function nimToCsharp(code: string): TranslationResult {
  return translateWithFallback("nim", "csharp", code);
}

export const nimToCsharpRules = rules;
