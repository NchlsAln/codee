import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("xml", "csharp");

export function xmlToCsharp(code: string): TranslationResult {
  return translateWithFallback("xml", "csharp", code);
}

export const xmlToCsharpRules = rules;
