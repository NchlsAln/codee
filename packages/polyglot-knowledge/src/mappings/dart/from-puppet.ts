import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("puppet", "dart");

export function puppetToDart(code: string): TranslationResult {
  return translateWithFallback("puppet", "dart", code);
}

export const puppetToDartRules = rules;
