import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("html", "java");

export function htmlToJava(code: string): TranslationResult {
  return translateWithFallback("html", "java", code);
}

export const htmlToJavaRules = rules;
