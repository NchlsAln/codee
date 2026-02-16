import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("xml", "dart");

export function xmlToDart(code: string): TranslationResult {
  return translateWithFallback("xml", "dart", code);
}

export const xmlToDartRules = rules;
