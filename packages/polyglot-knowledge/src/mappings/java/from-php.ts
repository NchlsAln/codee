import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("php", "java");

export function phpToJava(code: string): TranslationResult {
  return translateWithFallback("php", "java", code);
}

export const phpToJavaRules = rules;
