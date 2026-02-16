import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("yaml", "sql");

export function yamlToSql(code: string): TranslationResult {
  return translateWithFallback("yaml", "sql", code);
}

export const yamlToSqlRules = rules;
