import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("sql", "scala");

export function sqlToScala(code: string): TranslationResult {
  return translateWithFallback("sql", "scala", code);
}

export const sqlToScalaRules = rules;
