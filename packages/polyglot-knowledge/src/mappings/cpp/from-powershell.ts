import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("powershell", "cpp");

export function powershellToCpp(code: string): TranslationResult {
  return translateWithFallback("powershell", "cpp", code);
}

export const powershellToCppRules = rules;
