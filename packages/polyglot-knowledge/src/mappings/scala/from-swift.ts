import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("swift", "scala");

export function swiftToScala(code: string): TranslationResult {
  return translateWithFallback("swift", "scala", code);
}

export const swiftToScalaRules = rules;
