import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("puppet", "java");

export function puppetToJava(code: string): TranslationResult {
  return translateWithFallback("puppet", "java", code);
}

export const puppetToJavaRules = rules;
