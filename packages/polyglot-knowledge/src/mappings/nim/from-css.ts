import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("css", "nim");

export function cssToNim(code: string): TranslationResult {
  return translateWithFallback("css", "nim", code);
}

export const cssToNimRules = rules;
