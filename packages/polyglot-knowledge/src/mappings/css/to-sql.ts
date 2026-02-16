import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("css", "sql");

export function cssToSql(code: string): TranslationResult {
  return translateWithFallback("css", "sql", code);
}

export const cssToSqlRules = rules;
