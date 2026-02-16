import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("nim", "java");

export function nimToJava(code: string): TranslationResult {
  return translateWithFallback("nim", "java", code);
}

export const nimToJavaRules = rules;
