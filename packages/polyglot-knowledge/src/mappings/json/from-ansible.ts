import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("ansible", "json");

export function ansibleToJson(code: string): TranslationResult {
  return translateWithFallback("ansible", "json", code);
}

export const ansibleToJsonRules = rules;
