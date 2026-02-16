import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("powershell", "dart");

export function powershellToDart(code: string): TranslationResult {
  return translateWithFallback("powershell", "dart", code);
}

export const powershellToDartRules = rules;
