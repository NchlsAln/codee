import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("cpp", "go");

export function cppToGo(code: string): TranslationResult {
  return translateWithFallback("cpp", "go", code);
}

export const cppToGoRules = rules;
