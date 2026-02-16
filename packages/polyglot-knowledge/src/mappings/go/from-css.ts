import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("css", "go");

export function cssToGo(code: string): TranslationResult {
  return translateWithFallback("css", "go", code);
}

export const cssToGoRules = rules;
