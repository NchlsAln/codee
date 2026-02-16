import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("sql", "csharp");

export function sqlToCsharp(code: string): TranslationResult {
  return translateWithFallback("sql", "csharp", code);
}

export const sqlToCsharpRules = rules;
