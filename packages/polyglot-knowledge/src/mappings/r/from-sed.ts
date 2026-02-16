import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("sed", "r");

export function sedToR(code: string): TranslationResult {
  return translateWithFallback("sed", "r", code);
}

export const sedToRRules = rules;
