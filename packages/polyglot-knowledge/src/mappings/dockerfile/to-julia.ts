import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("dockerfile", "julia");

export function dockerfileToJulia(code: string): TranslationResult {
  return translateWithFallback("dockerfile", "julia", code);
}

export const dockerfileToJuliaRules = rules;
