import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("sed", "go");

export function sedToGo(code: string): TranslationResult {
  return translateWithFallback("sed", "go", code);
}

export const sedToGoRules = rules;
