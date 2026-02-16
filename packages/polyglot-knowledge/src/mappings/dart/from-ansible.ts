import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("ansible", "dart");

export function ansibleToDart(code: string): TranslationResult {
  return translateWithFallback("ansible", "dart", code);
}

export const ansibleToDartRules = rules;
