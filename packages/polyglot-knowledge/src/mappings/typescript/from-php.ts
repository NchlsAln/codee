import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("php", "typescript");

export function phpToTypeScript(code: string): TranslationResult {
  return translateWithFallback("php", "typescript", code);
}

export const phpToTypeScriptRules = rules;
