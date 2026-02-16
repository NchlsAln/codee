import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("yaml", "java");

export function yamlToJava(code: string): TranslationResult {
  return translateWithFallback("yaml", "java", code);
}

export const yamlToJavaRules = rules;
