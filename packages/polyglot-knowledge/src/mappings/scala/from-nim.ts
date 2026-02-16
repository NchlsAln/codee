import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("nim", "scala");

export function nimToScala(code: string): TranslationResult {
  return translateWithFallback("nim", "scala", code);
}

export const nimToScalaRules = rules;
