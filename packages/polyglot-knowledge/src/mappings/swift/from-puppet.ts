import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("puppet", "swift");

export function puppetToSwift(code: string): TranslationResult {
  return translateWithFallback("puppet", "swift", code);
}

export const puppetToSwiftRules = rules;
