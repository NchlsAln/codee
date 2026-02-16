import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("java", "dart");

export function javaToDart(code: string): TranslationResult {
  return translateWithFallback("java", "dart", code);
}

export const javaToDartRules = rules;
