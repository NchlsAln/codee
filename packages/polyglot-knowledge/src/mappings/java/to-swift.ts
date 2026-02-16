import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("java", "swift");

export function javaToSwift(code: string): TranslationResult {
  return translateWithFallback("java", "swift", code);
}

export const javaToSwiftRules = rules;
