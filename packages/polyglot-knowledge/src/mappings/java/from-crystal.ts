import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("crystal", "java");

export function crystalToJava(code: string): TranslationResult {
  return translateWithFallback("crystal", "java", code);
}

export const crystalToJavaRules = rules;
