import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("sql", "crystal");

export function sqlToCrystal(code: string): TranslationResult {
  return translateWithFallback("sql", "crystal", code);
}

export const sqlToCrystalRules = rules;
