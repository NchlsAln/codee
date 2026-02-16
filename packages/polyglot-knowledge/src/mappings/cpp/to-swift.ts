import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("cpp", "swift");

export function cppToSwift(code: string): TranslationResult {
  return translateWithFallback("cpp", "swift", code);
}

export const cppToSwiftRules = rules;
