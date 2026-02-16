import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("ansible", "css");

export function ansibleToCss(code: string): TranslationResult {
  return translateWithFallback("ansible", "css", code);
}

export const ansibleToCssRules = rules;
