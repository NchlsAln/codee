import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("typescript", "dart");

export function typescriptToDart(code: string): TranslationResult {
  return translateWithFallback("typescript", "dart", code);
}

export const typescriptToDartRules = rules;
