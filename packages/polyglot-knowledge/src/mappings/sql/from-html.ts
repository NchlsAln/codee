import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("html", "sql");

export function htmlToSql(code: string): TranslationResult {
  return translateWithFallback("html", "sql", code);
}

export const htmlToSqlRules = rules;
