import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("rust", "swift");

export function rustToSwift(code: string): TranslationResult {
  return translateWithFallback("rust", "swift", code);
}

export const rustToSwiftRules = rules;
