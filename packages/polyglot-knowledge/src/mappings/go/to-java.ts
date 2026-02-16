import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("go", "java");

export function goToJava(code: string): TranslationResult {
  return translateWithFallback("go", "java", code);
}

export const goToJavaRules = rules;
