import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("chef", "powershell");

export function chefToPowerShell(code: string): TranslationResult {
  return translateWithFallback("chef", "powershell", code);
}

export const chefToPowerShellRules = rules;
