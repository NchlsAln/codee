import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("awk", "dart");

export function awkToDart(code: string): TranslationResult {
  return translateWithFallback("awk", "dart", code);
}

export const awkToDartRules = rules;
