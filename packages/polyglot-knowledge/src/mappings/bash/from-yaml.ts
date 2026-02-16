import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("yaml", "bash");

export function yamlToBash(code: string): TranslationResult {
  return translateWithFallback("yaml", "bash", code);
}

export const yamlToBashRules = rules;
