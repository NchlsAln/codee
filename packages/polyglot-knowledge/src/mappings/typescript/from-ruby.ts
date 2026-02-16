import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("ruby", "typescript");

export function rubyToTypeScript(code: string): TranslationResult {
  return translateWithFallback("ruby", "typescript", code);
}

export const rubyToTypeScriptRules = rules;
