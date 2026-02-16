import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("julia", "scala");

export function juliaToScala(code: string): TranslationResult {
  return translateWithFallback("julia", "scala", code);
}

export const juliaToScalaRules = rules;
