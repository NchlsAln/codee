import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("typescript", "swift");

export function typescriptToSwift(code: string): TranslationResult {
  return translateWithFallback("typescript", "swift", code);
}

export const typescriptToSwiftRules = rules;
