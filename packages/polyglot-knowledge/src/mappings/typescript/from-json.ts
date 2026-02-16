import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("json", "typescript");

export function jsonToTypeScript(code: string): TranslationResult {
  return translateWithFallback("json", "typescript", code);
}

export const jsonToTypeScriptRules = rules;
