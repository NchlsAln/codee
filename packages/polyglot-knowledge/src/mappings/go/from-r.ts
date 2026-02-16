import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("r", "go");

export function rToGo(code: string): TranslationResult {
  return translateWithFallback("r", "go", code);
}

export const rToGoRules = rules;
