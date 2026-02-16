import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("python", "csharp");

export function pythonToCsharp(code: string): TranslationResult {
  return translateWithFallback("python", "csharp", code);
}

export const pythonToCsharpRules = rules;
