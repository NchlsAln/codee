import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("dockerfile", "java");

export function dockerfileToJava(code: string): TranslationResult {
  return translateWithFallback("dockerfile", "java", code);
}

export const dockerfileToJavaRules = rules;
