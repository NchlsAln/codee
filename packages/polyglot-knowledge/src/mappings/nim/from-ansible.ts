import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("ansible", "nim");

export function ansibleToNim(code: string): TranslationResult {
  return translateWithFallback("ansible", "nim", code);
}

export const ansibleToNimRules = rules;
