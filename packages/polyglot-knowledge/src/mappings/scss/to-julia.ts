import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("scss", "julia");

export function scssToJulia(code: string): TranslationResult {
  return translateWithFallback("scss", "julia", code);
}

export const scssToJuliaRules = rules;
