import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("dockerfile", "sql");

export function dockerfileToSql(code: string): TranslationResult {
  return translateWithFallback("dockerfile", "sql", code);
}

export const dockerfileToSqlRules = rules;
