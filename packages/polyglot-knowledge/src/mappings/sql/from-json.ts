import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("json", "sql");

export function jsonToSql(code: string): TranslationResult {
  return translateWithFallback("json", "sql", code);
}

export const jsonToSqlRules = rules;
