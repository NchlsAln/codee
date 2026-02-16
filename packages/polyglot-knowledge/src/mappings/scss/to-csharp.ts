import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("scss", "csharp");

export function scssToCsharp(code: string): TranslationResult {
  return translateWithFallback("scss", "csharp", code);
}

export const scssToCsharpRules = rules;
