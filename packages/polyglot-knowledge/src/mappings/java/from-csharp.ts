import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("csharp", "java");

export function csharpToJava(code: string): TranslationResult {
  return translateWithFallback("csharp", "java", code);
}

export const csharpToJavaRules = rules;
