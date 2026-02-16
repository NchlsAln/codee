import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("r", "dart");

export function rToDart(code: string): TranslationResult {
  return translateWithFallback("r", "dart", code);
}

export const rToDartRules = rules;
