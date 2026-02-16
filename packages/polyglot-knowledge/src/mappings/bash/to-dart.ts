import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("bash", "dart");

export function bashToDart(code: string): TranslationResult {
  return translateWithFallback("bash", "dart", code);
}

export const bashToDartRules = rules;
