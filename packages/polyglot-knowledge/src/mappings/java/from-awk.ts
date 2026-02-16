import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("awk", "java");

export function awkToJava(code: string): TranslationResult {
  return translateWithFallback("awk", "java", code);
}

export const awkToJavaRules = rules;
