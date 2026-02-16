import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("terraform", "java");

export function terraformToJava(code: string): TranslationResult {
  return translateWithFallback("terraform", "java", code);
}

export const terraformToJavaRules = rules;
