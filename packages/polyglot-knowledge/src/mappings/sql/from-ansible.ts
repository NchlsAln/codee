import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("ansible", "sql");

export function ansibleToSql(code: string): TranslationResult {
  return translateWithFallback("ansible", "sql", code);
}

export const ansibleToSqlRules = rules;
