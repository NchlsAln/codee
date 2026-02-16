import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("julia", "typescript");

export function juliaToTypeScript(code: string): TranslationResult {
  return translateWithFallback("julia", "typescript", code);
}

export const juliaToTypeScriptRules = rules;
