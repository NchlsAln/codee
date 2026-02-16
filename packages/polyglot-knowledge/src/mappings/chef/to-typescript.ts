import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("chef", "typescript");

export function chefToTypeScript(code: string): TranslationResult {
  return translateWithFallback("chef", "typescript", code);
}

export const chefToTypeScriptRules = rules;
