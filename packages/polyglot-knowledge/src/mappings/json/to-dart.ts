import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("json", "dart");

export function jsonToDart(code: string): TranslationResult {
  return translateWithFallback("json", "dart", code);
}

export const jsonToDartRules = rules;
