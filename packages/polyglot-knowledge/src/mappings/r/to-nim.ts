import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("r", "nim");

export function rToNim(code: string): TranslationResult {
  return translateWithFallback("r", "nim", code);
}

export const rToNimRules = rules;
