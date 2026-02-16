import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("sql", "nim");

export function sqlToNim(code: string): TranslationResult {
  return translateWithFallback("sql", "nim", code);
}

export const sqlToNimRules = rules;
