import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("matlab", "scala");

export function matlabToScala(code: string): TranslationResult {
  return translateWithFallback("matlab", "scala", code);
}

export const matlabToScalaRules = rules;
