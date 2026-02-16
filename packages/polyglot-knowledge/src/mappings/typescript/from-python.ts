import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("python", "typescript");

export function pythonToTypeScript(code: string): TranslationResult {
  return translateWithFallback("python", "typescript", code);
}

export const pythonToTypeScriptRules = rules;
