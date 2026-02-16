import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("julia", "csharp");

export function juliaToCsharp(code: string): TranslationResult {
  return translateWithFallback("julia", "csharp", code);
}

export const juliaToCsharpRules = rules;
