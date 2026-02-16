import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("scala", "typescript");

export function scalaToTypeScript(code: string): TranslationResult {
  return translateWithFallback("scala", "typescript", code);
}

export const scalaToTypeScriptRules = rules;
