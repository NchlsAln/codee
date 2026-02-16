import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("bash", "swift");

export function bashToSwift(code: string): TranslationResult {
  return translateWithFallback("bash", "swift", code);
}

export const bashToSwiftRules = rules;
