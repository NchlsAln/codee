import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("yaml", "csharp");

export function yamlToCsharp(code: string): TranslationResult {
  return translateWithFallback("yaml", "csharp", code);
}

export const yamlToCsharpRules = rules;
