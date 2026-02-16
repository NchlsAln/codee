import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("nim", "swift");

export function nimToSwift(code: string): TranslationResult {
  return translateWithFallback("nim", "swift", code);
}

export const nimToSwiftRules = rules;
