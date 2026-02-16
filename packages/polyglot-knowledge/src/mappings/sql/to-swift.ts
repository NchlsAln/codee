import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("sql", "swift");

export function sqlToSwift(code: string): TranslationResult {
  return translateWithFallback("sql", "swift", code);
}

export const sqlToSwiftRules = rules;
