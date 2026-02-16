import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("julia", "swift");

export function juliaToSwift(code: string): TranslationResult {
  return translateWithFallback("julia", "swift", code);
}

export const juliaToSwiftRules = rules;
