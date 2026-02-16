import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("dockerfile", "rust");

export function dockerfileToRust(code: string): TranslationResult {
  return translateWithFallback("dockerfile", "rust", code);
}

export const dockerfileToRustRules = rules;
