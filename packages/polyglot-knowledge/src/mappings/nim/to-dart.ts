import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("nim", "dart");

export function nimToDart(code: string): TranslationResult {
  return translateWithFallback("nim", "dart", code);
}

export const nimToDartRules = rules;
