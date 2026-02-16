import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("kotlin", "java");

export function kotlinToJava(code: string): TranslationResult {
  return translateWithFallback("kotlin", "java", code);
}

export const kotlinToJavaRules = rules;
