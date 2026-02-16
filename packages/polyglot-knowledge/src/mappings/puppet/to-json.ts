import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("puppet", "json");

export function puppetToJson(code: string): TranslationResult {
  return translateWithFallback("puppet", "json", code);
}

export const puppetToJsonRules = rules;
