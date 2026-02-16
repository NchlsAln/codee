import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("dart", "typescript");

export function dartToTypeScript(code: string): TranslationResult {
  return translateWithFallback("dart", "typescript", code);
}

export const dartToTypeScriptRules = rules;
