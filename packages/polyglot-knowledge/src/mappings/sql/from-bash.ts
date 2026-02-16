import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("bash", "sql");

export function bashToSql(code: string): TranslationResult {
  return translateWithFallback("bash", "sql", code);
}

export const bashToSqlRules = rules;
