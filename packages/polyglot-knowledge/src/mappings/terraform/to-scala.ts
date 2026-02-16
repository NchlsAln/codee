import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("terraform", "scala");

export function terraformToScala(code: string): TranslationResult {
  return translateWithFallback("terraform", "scala", code);
}

export const terraformToScalaRules = rules;
