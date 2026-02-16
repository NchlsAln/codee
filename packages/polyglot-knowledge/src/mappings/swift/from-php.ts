import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("php", "swift");

export function phpToSwift(code: string): TranslationResult {
  return translateWithFallback("php", "swift", code);
}

export const phpToSwiftRules = rules;
