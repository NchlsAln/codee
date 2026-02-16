import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("sed", "nim");

export function sedToNim(code: string): TranslationResult {
  return translateWithFallback("sed", "nim", code);
}

export const sedToNimRules = rules;
