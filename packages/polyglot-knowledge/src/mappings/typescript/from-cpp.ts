import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("cpp", "typescript");

export function cppToTypeScript(code: string): TranslationResult {
  return translateWithFallback("cpp", "typescript", code);
}

export const cppToTypeScriptRules = rules;
