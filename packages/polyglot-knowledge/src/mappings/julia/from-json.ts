import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("json", "julia");

export function jsonToJulia(code: string): TranslationResult {
  return translateWithFallback("json", "julia", code);
}

export const jsonToJuliaRules = rules;
