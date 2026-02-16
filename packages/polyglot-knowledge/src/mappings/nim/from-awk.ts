import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("awk", "nim");

export function awkToNim(code: string): TranslationResult {
  return translateWithFallback("awk", "nim", code);
}

export const awkToNimRules = rules;
