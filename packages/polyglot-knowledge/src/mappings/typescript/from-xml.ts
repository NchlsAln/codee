import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("xml", "typescript");

export function xmlToTypeScript(code: string): TranslationResult {
  return translateWithFallback("xml", "typescript", code);
}

export const xmlToTypeScriptRules = rules;
