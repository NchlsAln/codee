import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("ansible", "java");

export function ansibleToJava(code: string): TranslationResult {
  return translateWithFallback("ansible", "java", code);
}

export const ansibleToJavaRules = rules;
