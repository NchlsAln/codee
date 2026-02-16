import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("scss", "java");

export function scssToJava(code: string): TranslationResult {
  return translateWithFallback("scss", "java", code);
}

export const scssToJavaRules = rules;
