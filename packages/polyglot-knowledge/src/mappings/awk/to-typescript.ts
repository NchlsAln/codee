import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("awk", "typescript");

export function awkToTypeScript(code: string): TranslationResult {
  return translateWithFallback("awk", "typescript", code);
}

export const awkToTypeScriptRules = rules;
