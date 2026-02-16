import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("cpp", "java");

export function cppToJava(code: string): TranslationResult {
  return translateWithFallback("cpp", "java", code);
}

export const cppToJavaRules = rules;
