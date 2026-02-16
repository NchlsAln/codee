import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("ansible", "csharp");

export function ansibleToCsharp(code: string): TranslationResult {
  return translateWithFallback("ansible", "csharp", code);
}

export const ansibleToCsharpRules = rules;
