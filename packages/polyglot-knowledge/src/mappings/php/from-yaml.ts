import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("yaml", "php");

export function yamlToPhp(code: string): TranslationResult {
  return translateWithFallback("yaml", "php", code);
}

export const yamlToPhpRules = rules;
