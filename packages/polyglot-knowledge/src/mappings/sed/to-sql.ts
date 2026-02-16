import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("sed", "sql");

export function sedToSql(code: string): TranslationResult {
  return translateWithFallback("sed", "sql", code);
}

export const sedToSqlRules = rules;
