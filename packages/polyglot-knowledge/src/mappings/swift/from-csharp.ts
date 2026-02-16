import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("csharp", "swift");

export function csharpToSwift(code: string): TranslationResult {
  return translateWithFallback("csharp", "swift", code);
}

export const csharpToSwiftRules = rules;
