import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("sas", "csharp");

export function sasToCsharp(code: string): TranslationResult {
  return translateWithFallback("sas", "csharp", code);
}

export const sasToCsharpRules = rules;
