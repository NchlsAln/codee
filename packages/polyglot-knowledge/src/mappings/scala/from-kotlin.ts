import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("kotlin", "scala");

export function kotlinToScala(code: string): TranslationResult {
  return translateWithFallback("kotlin", "scala", code);
}

export const kotlinToScalaRules = rules;
