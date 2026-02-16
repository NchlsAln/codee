import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("matlab", "java");

export function matlabToJava(code: string): TranslationResult {
  return translateWithFallback("matlab", "java", code);
}

export const matlabToJavaRules = rules;
