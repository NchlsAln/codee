import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("r", "typescript");

export function rToTypeScript(code: string): TranslationResult {
  return translateWithFallback("r", "typescript", code);
}

export const rToTypeScriptRules = rules;
