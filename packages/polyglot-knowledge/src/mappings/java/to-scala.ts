import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("java", "scala");

export function javaToScala(code: string): TranslationResult {
  return translateWithFallback("java", "scala", code);
}

export const javaToScalaRules = rules;
