import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("awk", "scala");

export function awkToScala(code: string): TranslationResult {
  return translateWithFallback("awk", "scala", code);
}

export const awkToScalaRules = rules;
