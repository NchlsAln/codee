import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("xml", "bash");

export function xmlToBash(code: string): TranslationResult {
  return translateWithFallback("xml", "bash", code);
}

export const xmlToBashRules = rules;
