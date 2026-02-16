import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("css", "dart");

export function cssToDart(code: string): TranslationResult {
  return translateWithFallback("css", "dart", code);
}

export const cssToDartRules = rules;
