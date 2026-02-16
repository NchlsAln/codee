import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("typescript", "java");

export function typescriptToJava(code: string): TranslationResult {
  return translateWithFallback("typescript", "java", code);
}

export const typescriptToJavaRules = rules;
