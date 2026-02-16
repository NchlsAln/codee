import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("xml", "nim");

export function xmlToNim(code: string): TranslationResult {
  return translateWithFallback("xml", "nim", code);
}

export const xmlToNimRules = rules;
