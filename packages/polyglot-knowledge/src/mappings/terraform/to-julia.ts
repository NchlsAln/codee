import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("terraform", "julia");

export function terraformToJulia(code: string): TranslationResult {
  return translateWithFallback("terraform", "julia", code);
}

export const terraformToJuliaRules = rules;
