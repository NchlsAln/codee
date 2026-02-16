import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("html", "swift");

export function htmlToSwift(code: string): TranslationResult {
  return translateWithFallback("html", "swift", code);
}

export const htmlToSwiftRules = rules;
