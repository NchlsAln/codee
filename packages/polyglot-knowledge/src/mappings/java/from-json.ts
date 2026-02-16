import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("json", "java");

export function jsonToJava(code: string): TranslationResult {
  return translateWithFallback("json", "java", code);
}

export const jsonToJavaRules = rules;
