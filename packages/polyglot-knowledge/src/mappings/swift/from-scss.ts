import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("scss", "swift");

export function scssToSwift(code: string): TranslationResult {
  return translateWithFallback("scss", "swift", code);
}

export const scssToSwiftRules = rules;
