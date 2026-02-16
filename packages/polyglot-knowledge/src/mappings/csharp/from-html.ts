import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("html", "csharp");

export function htmlToCsharp(code: string): TranslationResult {
  return translateWithFallback("html", "csharp", code);
}

export const htmlToCsharpRules = rules;
