import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("css", "typescript");

export function cssToTypeScript(code: string): TranslationResult {
  return translateWithFallback("css", "typescript", code);
}

export const cssToTypeScriptRules = rules;
