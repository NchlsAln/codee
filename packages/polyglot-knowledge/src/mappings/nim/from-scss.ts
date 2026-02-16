import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("scss", "nim");

export function scssToNim(code: string): TranslationResult {
  return translateWithFallback("scss", "nim", code);
}

export const scssToNimRules = rules;
