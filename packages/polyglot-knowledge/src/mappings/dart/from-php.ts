import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("php", "dart");

export function phpToDart(code: string): TranslationResult {
  return translateWithFallback("php", "dart", code);
}

export const phpToDartRules = rules;
