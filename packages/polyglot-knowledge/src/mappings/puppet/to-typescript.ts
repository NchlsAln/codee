import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("puppet", "typescript");

export function puppetToTypeScript(code: string): TranslationResult {
  return translateWithFallback("puppet", "typescript", code);
}

export const puppetToTypeScriptRules = rules;
