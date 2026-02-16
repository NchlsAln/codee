import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("sed", "java");

export function sedToJava(code: string): TranslationResult {
  return translateWithFallback("sed", "java", code);
}

export const sedToJavaRules = rules;
