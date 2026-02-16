import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("julia", "java");

export function juliaToJava(code: string): TranslationResult {
  return translateWithFallback("julia", "java", code);
}

export const juliaToJavaRules = rules;
