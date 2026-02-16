import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("chef", "sql");

export function chefToSql(code: string): TranslationResult {
  return translateWithFallback("chef", "sql", code);
}

export const chefToSqlRules = rules;
