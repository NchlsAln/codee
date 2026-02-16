import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("kotlin", "dart");

export function kotlinToDart(code: string): TranslationResult {
  return translateWithFallback("kotlin", "dart", code);
}

export const kotlinToDartRules = rules;
