import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("sql", "java");

export function sqlToJava(code: string): TranslationResult {
  return translateWithFallback("sql", "java", code);
}

export const sqlToJavaRules = rules;
