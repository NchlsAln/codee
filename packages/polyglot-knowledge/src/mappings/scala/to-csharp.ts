import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("scala", "csharp");

export function scalaToCsharp(code: string): TranslationResult {
  return translateWithFallback("scala", "csharp", code);
}

export const scalaToCsharpRules = rules;
