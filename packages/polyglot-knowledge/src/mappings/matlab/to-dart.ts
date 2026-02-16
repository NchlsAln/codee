import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("matlab", "dart");

export function matlabToDart(code: string): TranslationResult {
  return translateWithFallback("matlab", "dart", code);
}

export const matlabToDartRules = rules;
