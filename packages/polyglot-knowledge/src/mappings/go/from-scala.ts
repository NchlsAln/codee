import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("scala", "go");

export function scalaToGo(code: string): TranslationResult {
  return translateWithFallback("scala", "go", code);
}

export const scalaToGoRules = rules;
