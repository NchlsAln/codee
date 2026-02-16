import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("ansible", "swift");

export function ansibleToSwift(code: string): TranslationResult {
  return translateWithFallback("ansible", "swift", code);
}

export const ansibleToSwiftRules = rules;
