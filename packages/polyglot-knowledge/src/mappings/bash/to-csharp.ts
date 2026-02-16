import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("bash", "csharp");

export function bashToCsharp(code: string): TranslationResult {
  return translateWithFallback("bash", "csharp", code);
}

export const bashToCsharpRules = rules;
