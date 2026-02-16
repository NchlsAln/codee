import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("puppet", "sql");

export function puppetToSql(code: string): TranslationResult {
  return translateWithFallback("puppet", "sql", code);
}

export const puppetToSqlRules = rules;
