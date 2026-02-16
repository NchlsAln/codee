import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("css", "julia");

export function cssToJulia(code: string): TranslationResult {
  return translateWithFallback("css", "julia", code);
}

export const cssToJuliaRules = rules;
