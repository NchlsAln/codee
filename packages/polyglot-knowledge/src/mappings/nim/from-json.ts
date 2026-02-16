import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("json", "nim");

export function jsonToNim(code: string): TranslationResult {
  return translateWithFallback("json", "nim", code);
}

export const jsonToNimRules = rules;
