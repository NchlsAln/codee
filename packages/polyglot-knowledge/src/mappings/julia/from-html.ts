import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("html", "julia");

export function htmlToJulia(code: string): TranslationResult {
  return translateWithFallback("html", "julia", code);
}

export const htmlToJuliaRules = rules;
