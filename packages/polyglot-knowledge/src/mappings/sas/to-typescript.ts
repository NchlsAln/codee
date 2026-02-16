import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("sas", "typescript");

export function sasToTypeScript(code: string): TranslationResult {
  return translateWithFallback("sas", "typescript", code);
}

export const sasToTypeScriptRules = rules;
