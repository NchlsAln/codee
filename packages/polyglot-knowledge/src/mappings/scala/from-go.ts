import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("go", "scala");

export function goToScala(code: string): TranslationResult {
  return translateWithFallback("go", "scala", code);
}

export const goToScalaRules = rules;
