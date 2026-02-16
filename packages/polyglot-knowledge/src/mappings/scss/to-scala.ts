import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("scss", "scala");

export function scssToScala(code: string): TranslationResult {
  return translateWithFallback("scss", "scala", code);
}

export const scssToScalaRules = rules;
