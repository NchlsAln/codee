import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("crystal", "go");

export function crystalToGo(code: string): TranslationResult {
  return translateWithFallback("crystal", "go", code);
}

export const crystalToGoRules = rules;
