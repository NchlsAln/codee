import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("swift", "dart");

export function swiftToDart(code: string): TranslationResult {
  return translateWithFallback("swift", "dart", code);
}

export const swiftToDartRules = rules;
