import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("rust", "typescript");

export function rustToTypeScript(code: string): TranslationResult {
  return translateWithFallback("rust", "typescript", code);
}

export const rustToTypeScriptRules = rules;
