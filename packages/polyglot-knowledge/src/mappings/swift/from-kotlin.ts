import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("kotlin", "swift");

export function kotlinToSwift(code: string): TranslationResult {
  return translateWithFallback("kotlin", "swift", code);
}

export const kotlinToSwiftRules = rules;
