import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("terraform", "typescript");

export function terraformToTypeScript(code: string): TranslationResult {
  return translateWithFallback("terraform", "typescript", code);
}

export const terraformToTypeScriptRules = rules;
