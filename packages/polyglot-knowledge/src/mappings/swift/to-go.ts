import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("swift", "go");

export function swiftToGo(code: string): TranslationResult {
  return translateWithFallback("swift", "go", code);
}

export const swiftToGoRules = rules;
