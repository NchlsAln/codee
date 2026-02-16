import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("ansible", "typescript");

export function ansibleToTypeScript(code: string): TranslationResult {
  return translateWithFallback("ansible", "typescript", code);
}

export const ansibleToTypeScriptRules = rules;
