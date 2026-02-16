import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("kotlin", "typescript");

export function kotlinToTypeScript(code: string): TranslationResult {
  return translateWithFallback("kotlin", "typescript", code);
}

export const kotlinToTypeScriptRules = rules;
