import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("bash", "nim");

export function bashToNim(code: string): TranslationResult {
  return translateWithFallback("bash", "nim", code);
}

export const bashToNimRules = rules;
