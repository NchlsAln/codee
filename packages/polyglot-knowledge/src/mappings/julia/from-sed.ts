import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("sed", "julia");

export function sedToJulia(code: string): TranslationResult {
  return translateWithFallback("sed", "julia", code);
}

export const sedToJuliaRules = rules;
