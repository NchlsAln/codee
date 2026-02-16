import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("yaml", "julia");

export function yamlToJulia(code: string): TranslationResult {
  return translateWithFallback("yaml", "julia", code);
}

export const yamlToJuliaRules = rules;
