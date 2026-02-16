import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("dockerfile", "nim");

export function dockerfileToNim(code: string): TranslationResult {
  return translateWithFallback("dockerfile", "nim", code);
}

export const dockerfileToNimRules = rules;
