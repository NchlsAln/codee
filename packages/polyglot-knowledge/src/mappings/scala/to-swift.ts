import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("scala", "swift");

export function scalaToSwift(code: string): TranslationResult {
  return translateWithFallback("scala", "swift", code);
}

export const scalaToSwiftRules = rules;
