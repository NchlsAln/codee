import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("bash", "typescript");

export function bashToTypeScript(code: string): TranslationResult {
  return translateWithFallback("bash", "typescript", code);
}

export const bashToTypeScriptRules = rules;
