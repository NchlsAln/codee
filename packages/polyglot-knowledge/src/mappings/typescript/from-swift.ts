import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("swift", "typescript");

export function swiftToTypeScript(code: string): TranslationResult {
  return translateWithFallback("swift", "typescript", code);
}

export const swiftToTypeScriptRules = rules;
