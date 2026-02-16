import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("yaml", "sed");

export function yamlToSed(code: string): TranslationResult {
  return translateWithFallback("yaml", "sed", code);
}

export const yamlToSedRules = rules;
