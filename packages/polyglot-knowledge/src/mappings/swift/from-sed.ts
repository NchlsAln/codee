import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("sed", "swift");

export function sedToSwift(code: string): TranslationResult {
  return translateWithFallback("sed", "swift", code);
}

export const sedToSwiftRules = rules;
