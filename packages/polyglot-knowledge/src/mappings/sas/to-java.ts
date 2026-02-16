import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("sas", "java");

export function sasToJava(code: string): TranslationResult {
  return translateWithFallback("sas", "java", code);
}

export const sasToJavaRules = rules;
