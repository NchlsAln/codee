import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("bash", "go");

export function bashToGo(code: string): TranslationResult {
  return translateWithFallback("bash", "go", code);
}

export const bashToGoRules = rules;
