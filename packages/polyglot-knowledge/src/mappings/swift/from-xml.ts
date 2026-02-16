import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("xml", "swift");

export function xmlToSwift(code: string): TranslationResult {
  return translateWithFallback("xml", "swift", code);
}

export const xmlToSwiftRules = rules;
