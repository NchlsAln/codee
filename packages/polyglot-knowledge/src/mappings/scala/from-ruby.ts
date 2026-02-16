import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("ruby", "scala");

export function rubyToScala(code: string): TranslationResult {
  return translateWithFallback("ruby", "scala", code);
}

export const rubyToScalaRules = rules;
