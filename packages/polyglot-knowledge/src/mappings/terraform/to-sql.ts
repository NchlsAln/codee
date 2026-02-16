import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("terraform", "sql");

export function terraformToSql(code: string): TranslationResult {
  return translateWithFallback("terraform", "sql", code);
}

export const terraformToSqlRules = rules;
