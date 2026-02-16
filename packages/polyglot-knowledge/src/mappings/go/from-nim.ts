import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("nim", "go");

export function nimToGo(code: string): TranslationResult {
  return translateWithFallback("nim", "go", code);
}

export const nimToGoRules = rules;
