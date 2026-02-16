import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("terraform", "powershell");

export function terraformToPowerShell(code: string): TranslationResult {
  return translateWithFallback("terraform", "powershell", code);
}

export const terraformToPowerShellRules = rules;
