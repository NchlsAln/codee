import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("rust", "scala");

export function rustToScala(code: string): TranslationResult {
  return translateWithFallback("rust", "scala", code);
}

export const rustToScalaRules = rules;
