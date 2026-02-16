import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("crystal", "swift");

export function crystalToSwift(code: string): TranslationResult {
  return translateWithFallback("crystal", "swift", code);
}

export const crystalToSwiftRules = rules;
