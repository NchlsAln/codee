import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("python", "rust");

export function pythonToRust(code: string): TranslationResult {
  return translateWithFallback("python", "rust", code);
}

export const pythonToRustRules = rules;
