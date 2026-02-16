import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("csharp", "typescript");

export function csharpToTypeScript(code: string): TranslationResult {
  return translateWithFallback("csharp", "typescript", code);
}

export const csharpToTypeScriptRules = rules;
