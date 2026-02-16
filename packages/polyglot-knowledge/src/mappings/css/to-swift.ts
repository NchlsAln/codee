import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("css", "swift");

export function cssToSwift(code: string): TranslationResult {
  return translateWithFallback("css", "swift", code);
}

export const cssToSwiftRules = rules;
