import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("matlab", "typescript");

export function matlabToTypeScript(code: string): TranslationResult {
  return translateWithFallback("matlab", "typescript", code);
}

export const matlabToTypeScriptRules = rules;
