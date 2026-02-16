import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("julia", "nim");

export function juliaToNim(code: string): TranslationResult {
  return translateWithFallback("julia", "nim", code);
}

export const juliaToNimRules = rules;
