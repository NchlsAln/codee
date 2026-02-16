import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("csharp", "go");

export function csharpToGo(code: string): TranslationResult {
  return translateWithFallback("csharp", "go", code);
}

export const csharpToGoRules = rules;
