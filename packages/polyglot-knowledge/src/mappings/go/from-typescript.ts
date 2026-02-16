import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("typescript", "go");

export function typescriptToGo(code: string): TranslationResult {
  return translateWithFallback("typescript", "go", code);
}

export const typescriptToGoRules = rules;
