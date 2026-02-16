import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("scala", "dart");

export function scalaToDart(code: string): TranslationResult {
  return translateWithFallback("scala", "dart", code);
}

export const scalaToDartRules = rules;
