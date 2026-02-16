import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("puppet", "go");

export function puppetToGo(code: string): TranslationResult {
  return translateWithFallback("puppet", "go", code);
}

export const puppetToGoRules = rules;
