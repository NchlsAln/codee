import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("r", "swift");

export function rToSwift(code: string): TranslationResult {
  return translateWithFallback("r", "swift", code);
}

export const rToSwiftRules = rules;
