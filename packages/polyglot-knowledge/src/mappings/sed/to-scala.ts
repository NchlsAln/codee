import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("sed", "scala");

export function sedToScala(code: string): TranslationResult {
  return translateWithFallback("sed", "scala", code);
}

export const sedToScalaRules = rules;
