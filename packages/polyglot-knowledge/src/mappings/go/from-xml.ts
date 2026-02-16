import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("xml", "go");

export function xmlToGo(code: string): TranslationResult {
  return translateWithFallback("xml", "go", code);
}

export const xmlToGoRules = rules;
