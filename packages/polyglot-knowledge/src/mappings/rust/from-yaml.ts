import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("yaml", "rust");

export function yamlToRust(code: string): TranslationResult {
  return translateWithFallback("yaml", "rust", code);
}

export const yamlToRustRules = rules;
