import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("php", "csharp");

export function phpToCsharp(code: string): TranslationResult {
  return translateWithFallback("php", "csharp", code);
}

export const phpToCsharpRules = rules;
