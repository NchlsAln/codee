import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("crystal", "typescript");

export function crystalToTypeScript(code: string): TranslationResult {
  return translateWithFallback("crystal", "typescript", code);
}

export const crystalToTypeScriptRules = rules;
