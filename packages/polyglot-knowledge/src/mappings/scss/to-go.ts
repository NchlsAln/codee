import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("scss", "go");

export function scssToGo(code: string): TranslationResult {
  return translateWithFallback("scss", "go", code);
}

export const scssToGoRules = rules;
