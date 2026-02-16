import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("csharp", "rust");

export function csharpToRust(code: string): TranslationResult {
  return translateWithFallback("csharp", "rust", code);
}

export const csharpToRustRules = rules;
