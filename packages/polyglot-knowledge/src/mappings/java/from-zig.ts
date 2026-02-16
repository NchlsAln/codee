import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("zig", "java");

export function zigToJava(code: string): TranslationResult {
  return translateWithFallback("zig", "java", code);
}

export const zigToJavaRules = rules;
