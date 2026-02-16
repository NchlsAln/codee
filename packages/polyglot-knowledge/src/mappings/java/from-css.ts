import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("css", "java");

export function cssToJava(code: string): TranslationResult {
  return translateWithFallback("css", "java", code);
}

export const cssToJavaRules = rules;
