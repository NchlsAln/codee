import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("zig", "typescript");

export function zigToTypeScript(code: string): TranslationResult {
  return translateWithFallback("zig", "typescript", code);
}

export const zigToTypeScriptRules = rules;
