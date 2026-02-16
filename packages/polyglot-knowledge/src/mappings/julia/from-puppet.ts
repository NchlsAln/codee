import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("puppet", "julia");

export function puppetToJulia(code: string): TranslationResult {
  return translateWithFallback("puppet", "julia", code);
}

export const puppetToJuliaRules = rules;
