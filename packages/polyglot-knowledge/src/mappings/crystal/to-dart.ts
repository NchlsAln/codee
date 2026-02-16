import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("crystal", "dart");

export function crystalToDart(code: string): TranslationResult {
  return translateWithFallback("crystal", "dart", code);
}

export const crystalToDartRules = rules;
