import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("ruby", "java");

export function rubyToJava(code: string): TranslationResult {
  return translateWithFallback("ruby", "java", code);
}

export const rubyToJavaRules = rules;
