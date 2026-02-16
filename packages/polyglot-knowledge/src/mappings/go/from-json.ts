import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("json", "go");

export function jsonToGo(code: string): TranslationResult {
  return translateWithFallback("json", "go", code);
}

export const jsonToGoRules = rules;
