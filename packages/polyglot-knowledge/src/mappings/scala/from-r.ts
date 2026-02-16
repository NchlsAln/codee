import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("r", "scala");

export function rToScala(code: string): TranslationResult {
  return translateWithFallback("r", "scala", code);
}

export const rToScalaRules = rules;
