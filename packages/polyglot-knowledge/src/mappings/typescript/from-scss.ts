import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("scss", "typescript");

export function scssToTypeScript(code: string): TranslationResult {
  return translateWithFallback("scss", "typescript", code);
}

export const scssToTypeScriptRules = rules;
