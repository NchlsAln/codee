import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("json", "swift");

export function jsonToSwift(code: string): TranslationResult {
  return translateWithFallback("json", "swift", code);
}

export const jsonToSwiftRules = rules;
