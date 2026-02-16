import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("ansible", "powershell");

export function ansibleToPowerShell(code: string): TranslationResult {
  return translateWithFallback("ansible", "powershell", code);
}

export const ansibleToPowerShellRules = rules;
