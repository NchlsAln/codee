import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("sql", "typescript");

export function sqlToTypeScript(code: string): TranslationResult {
  return translateWithFallback("sql", "typescript", code);
}

export const sqlToTypeScriptRules = rules;
