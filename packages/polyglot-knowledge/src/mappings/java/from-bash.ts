import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("bash", "java");

export function bashToJava(code: string): TranslationResult {
  return translateWithFallback("bash", "java", code);
}

export const bashToJavaRules = rules;
