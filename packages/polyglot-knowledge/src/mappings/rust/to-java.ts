import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("rust", "java");

export function rustToJava(code: string): TranslationResult {
  return translateWithFallback("rust", "java", code);
}

export const rustToJavaRules = rules;
