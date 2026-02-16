import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("powershell", "crystal");

export function powershellToCrystal(code: string): TranslationResult {
  return translateWithFallback("powershell", "crystal", code);
}

export const powershellToCrystalRules = rules;
