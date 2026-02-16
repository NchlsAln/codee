import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("ansible", "scss");

export function ansibleToScss(code: string): TranslationResult {
  return translateWithFallback("ansible", "scss", code);
}

export const ansibleToScssRules = rules;
