import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("python", "swift");

export function pythonToSwift(code: string): TranslationResult {
  return translateWithFallback("python", "swift", code);
}

export const pythonToSwiftRules = rules;
