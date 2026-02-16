import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("html", "typescript");

export function htmlToTypeScript(code: string): TranslationResult {
  return translateWithFallback("html", "typescript", code);
}

export const htmlToTypeScriptRules = rules;
