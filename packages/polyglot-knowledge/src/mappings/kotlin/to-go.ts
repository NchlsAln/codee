import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("kotlin", "go");

export function kotlinToGo(code: string): TranslationResult {
  return translateWithFallback("kotlin", "go", code);
}

export const kotlinToGoRules = rules;
