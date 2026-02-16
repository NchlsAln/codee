import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("sql", "php");

export function sqlToPhp(code: string): TranslationResult {
  return translateWithFallback("sql", "php", code);
}

export const sqlToPhpRules = rules;
