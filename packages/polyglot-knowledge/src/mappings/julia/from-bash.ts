import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("bash", "julia");

export function bashToJulia(code: string): TranslationResult {
  return translateWithFallback("bash", "julia", code);
}

export const bashToJuliaRules = rules;
