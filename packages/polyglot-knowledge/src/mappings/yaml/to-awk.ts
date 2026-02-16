import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("yaml", "awk");

export function yamlToAwk(code: string): TranslationResult {
  return translateWithFallback("yaml", "awk", code);
}

export const yamlToAwkRules = rules;
