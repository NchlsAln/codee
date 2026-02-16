import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("sql", "go");

export function sqlToGo(code: string): TranslationResult {
  return translateWithFallback("sql", "go", code);
}

export const sqlToGoRules = rules;
