import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("awk", "sql");

export function awkToSql(code: string): TranslationResult {
  return translateWithFallback("awk", "sql", code);
}

export const awkToSqlRules = rules;
