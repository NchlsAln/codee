import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("yaml", "r");

export function yamlToR(code: string): TranslationResult {
  return translateWithFallback("yaml", "r", code);
}

export const yamlToRRules = rules;
