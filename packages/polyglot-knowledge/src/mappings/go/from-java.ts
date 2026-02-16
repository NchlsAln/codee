import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("java", "go");

export function javaToGo(code: string): TranslationResult {
  return translateWithFallback("java", "go", code);
}

export const javaToGoRules = rules;
