import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("ansible", "julia");

export function ansibleToJulia(code: string): TranslationResult {
  return translateWithFallback("ansible", "julia", code);
}

export const ansibleToJuliaRules = rules;
