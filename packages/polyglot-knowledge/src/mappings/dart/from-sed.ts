import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("sed", "dart");

export function sedToDart(code: string): TranslationResult {
  return translateWithFallback("sed", "dart", code);
}

export const sedToDartRules = rules;
