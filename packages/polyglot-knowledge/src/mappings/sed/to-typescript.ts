import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("sed", "typescript");

export function sedToTypeScript(code: string): TranslationResult {
  return translateWithFallback("sed", "typescript", code);
}

export const sedToTypeScriptRules = rules;
