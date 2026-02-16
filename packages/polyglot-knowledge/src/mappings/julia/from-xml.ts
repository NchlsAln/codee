import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("xml", "julia");

export function xmlToJulia(code: string): TranslationResult {
  return translateWithFallback("xml", "julia", code);
}

export const xmlToJuliaRules = rules;
