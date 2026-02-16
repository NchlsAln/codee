import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("xml", "java");

export function xmlToJava(code: string): TranslationResult {
  return translateWithFallback("xml", "java", code);
}

export const xmlToJavaRules = rules;
