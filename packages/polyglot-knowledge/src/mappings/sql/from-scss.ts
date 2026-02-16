import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("scss", "sql");

export function scssToSql(code: string): TranslationResult {
  return translateWithFallback("scss", "sql", code);
}

export const scssToSqlRules = rules;
