import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("chef", "scala");

export function chefToScala(code: string): TranslationResult {
  return translateWithFallback("chef", "scala", code);
}

export const chefToScalaRules = rules;
