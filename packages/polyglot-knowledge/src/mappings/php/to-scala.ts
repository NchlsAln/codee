import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("php", "scala");

export function phpToScala(code: string): TranslationResult {
  return translateWithFallback("php", "scala", code);
}

export const phpToScalaRules = rules;
