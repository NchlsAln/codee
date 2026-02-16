import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("erlang", "java");

export function erlangToJava(code: string): TranslationResult {
  return translateWithFallback("erlang", "java", code);
}

export const erlangToJavaRules = rules;
