import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("powershell", "csharp");

export function powershellToCsharp(code: string): TranslationResult {
  return translateWithFallback("powershell", "csharp", code);
}

export const powershellToCsharpRules = rules;
