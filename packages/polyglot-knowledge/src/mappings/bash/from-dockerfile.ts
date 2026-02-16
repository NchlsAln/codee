import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("dockerfile", "bash");

export function dockerfileToBash(code: string): TranslationResult {
  return translateWithFallback("dockerfile", "bash", code);
}

export const dockerfileToBashRules = rules;
