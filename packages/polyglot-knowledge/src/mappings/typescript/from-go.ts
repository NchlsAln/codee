import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("go", "typescript");

export function goToTypeScript(code: string): TranslationResult {
  return translateWithFallback("go", "typescript", code);
}

export const goToTypeScriptRules = rules;
