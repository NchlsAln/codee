import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("swift", "java");

export function swiftToJava(code: string): TranslationResult {
  return translateWithFallback("swift", "java", code);
}

export const swiftToJavaRules = rules;
