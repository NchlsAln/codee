import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("chef", "java");

export function chefToJava(code: string): TranslationResult {
  return translateWithFallback("chef", "java", code);
}

export const chefToJavaRules = rules;
