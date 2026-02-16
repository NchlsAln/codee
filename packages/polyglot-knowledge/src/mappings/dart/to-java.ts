import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("dart", "java");

export function dartToJava(code: string): TranslationResult {
  return translateWithFallback("dart", "java", code);
}

export const dartToJavaRules = rules;
