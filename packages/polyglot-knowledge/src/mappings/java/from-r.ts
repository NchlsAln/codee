import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("r", "java");

export function rToJava(code: string): TranslationResult {
  return translateWithFallback("r", "java", code);
}

export const rToJavaRules = rules;
