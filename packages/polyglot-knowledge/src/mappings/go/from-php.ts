import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("php", "go");

export function phpToGo(code: string): TranslationResult {
  return translateWithFallback("php", "go", code);
}

export const phpToGoRules = rules;
