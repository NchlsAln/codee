import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("awk", "julia");

export function awkToJulia(code: string): TranslationResult {
  return translateWithFallback("awk", "julia", code);
}

export const awkToJuliaRules = rules;
