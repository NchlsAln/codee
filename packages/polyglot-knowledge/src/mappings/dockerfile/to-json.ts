import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("dockerfile", "json");

export function dockerfileToJson(code: string): TranslationResult {
  return translateWithFallback("dockerfile", "json", code);
}

export const dockerfileToJsonRules = rules;
