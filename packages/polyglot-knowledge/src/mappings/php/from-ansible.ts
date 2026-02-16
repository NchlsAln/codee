import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("ansible", "php");

export function ansibleToPhp(code: string): TranslationResult {
  return translateWithFallback("ansible", "php", code);
}

export const ansibleToPhpRules = rules;
