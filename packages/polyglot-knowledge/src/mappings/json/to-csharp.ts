import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("json", "csharp");

export function jsonToCsharp(code: string): TranslationResult {
  return translateWithFallback("json", "csharp", code);
}

export const jsonToCsharpRules = rules;
