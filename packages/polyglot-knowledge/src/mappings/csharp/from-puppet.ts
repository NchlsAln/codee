import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("puppet", "csharp");

export function puppetToCsharp(code: string): TranslationResult {
  return translateWithFallback("puppet", "csharp", code);
}

export const puppetToCsharpRules = rules;
