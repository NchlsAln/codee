import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("yaml", "typescript");

export function yamlToTypeScript(code: string): TranslationResult {
  return translateWithFallback("yaml", "typescript", code);
}

export const yamlToTypeScriptRules = rules;
