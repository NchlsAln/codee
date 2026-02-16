import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("julia", "go");

export function juliaToGo(code: string): TranslationResult {
  return translateWithFallback("julia", "go", code);
}

export const juliaToGoRules = rules;
