import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("python", "java");

export function pythonToJava(code: string): TranslationResult {
  return translateWithFallback("python", "java", code);
}

export const pythonToJavaRules = rules;
