import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("powershell", "sql");

export function powershellToSql(code: string): TranslationResult {
  return translateWithFallback("powershell", "sql", code);
}

export const powershellToSqlRules = rules;
