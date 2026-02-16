import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("chef", "julia");

export function chefToJulia(code: string): TranslationResult {
  return translateWithFallback("chef", "julia", code);
}

export const chefToJuliaRules = rules;
