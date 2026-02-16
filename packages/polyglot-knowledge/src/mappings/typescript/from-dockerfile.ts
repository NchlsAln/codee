import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("dockerfile", "typescript");

export function dockerfileToTypeScript(code: string): TranslationResult {
  return translateWithFallback("dockerfile", "typescript", code);
}

export const dockerfileToTypeScriptRules = rules;
