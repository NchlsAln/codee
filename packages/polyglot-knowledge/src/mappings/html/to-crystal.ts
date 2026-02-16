import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("html", "crystal");

export function htmlToCrystal(code: string): TranslationResult {
  return translateWithFallback("html", "crystal", code);
}

export const htmlToCrystalRules = rules;
