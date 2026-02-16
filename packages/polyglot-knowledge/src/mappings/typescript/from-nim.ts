import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("nim", "typescript");

export function nimToTypeScript(code: string): TranslationResult {
  return translateWithFallback("nim", "typescript", code);
}

export const nimToTypeScriptRules = rules;
