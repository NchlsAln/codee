import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("nim", "php");

export function nimToPhp(code: string): TranslationResult {
  return translateWithFallback("nim", "php", code);
}

export const nimToPhpRules = rules;
