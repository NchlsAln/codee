import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("sed", "sas");

export function sedToSas(code: string): TranslationResult {
  return translateWithFallback("sed", "sas", code);
}

export const sedToSasRules = rules;
