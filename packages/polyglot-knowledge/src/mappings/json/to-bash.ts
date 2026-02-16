import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("json", "bash");

export function jsonToBash(code: string): TranslationResult {
  return translateWithFallback("json", "bash", code);
}

export const jsonToBashRules = rules;
