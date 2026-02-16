import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("dockerfile", "dart");

export function dockerfileToDart(code: string): TranslationResult {
  return translateWithFallback("dockerfile", "dart", code);
}

export const dockerfileToDartRules = rules;
