import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("scala", "java");

export function scalaToJava(code: string): TranslationResult {
  return translateWithFallback("scala", "java", code);
}

export const scalaToJavaRules = rules;
