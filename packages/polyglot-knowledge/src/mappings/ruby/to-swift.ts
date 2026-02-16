import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("ruby", "swift");

export function rubyToSwift(code: string): TranslationResult {
  return translateWithFallback("ruby", "swift", code);
}

export const rubyToSwiftRules = rules;
