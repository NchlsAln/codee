import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("xml", "sql");

export function xmlToSql(code: string): TranslationResult {
  return translateWithFallback("xml", "sql", code);
}

export const xmlToSqlRules = rules;
