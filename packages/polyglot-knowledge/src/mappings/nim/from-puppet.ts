import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("puppet", "nim");

export function puppetToNim(code: string): TranslationResult {
  return translateWithFallback("puppet", "nim", code);
}

export const puppetToNimRules = rules;
