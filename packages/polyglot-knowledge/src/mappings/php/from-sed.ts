import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("sed", "php");

export function sedToPhp(code: string): TranslationResult {
  return translateWithFallback("sed", "php", code);
}

export const sedToPhpRules = rules;
