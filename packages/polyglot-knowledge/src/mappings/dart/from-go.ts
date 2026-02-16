import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("go", "dart");

export function goToDart(code: string): TranslationResult {
  return translateWithFallback("go", "dart", code);
}

export const goToDartRules = rules;
