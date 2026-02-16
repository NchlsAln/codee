import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("go", "swift");

export function goToSwift(code: string): TranslationResult {
  return translateWithFallback("go", "swift", code);
}

export const goToSwiftRules = rules;
