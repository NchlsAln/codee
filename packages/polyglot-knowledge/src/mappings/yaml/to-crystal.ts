import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("yaml", "crystal");

export function yamlToCrystal(code: string): TranslationResult {
  return translateWithFallback("yaml", "crystal", code);
}

export const yamlToCrystalRules = rules;
