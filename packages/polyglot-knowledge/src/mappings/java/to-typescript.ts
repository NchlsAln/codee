import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("java", "typescript");

export function javaToTypeScript(code: string): TranslationResult {
  return translateWithFallback("java", "typescript", code);
}

export const javaToTypeScriptRules = rules;
