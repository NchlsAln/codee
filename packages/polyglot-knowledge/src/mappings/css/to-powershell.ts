import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("css", "powershell");

export function cssToPowerShell(code: string): TranslationResult {
  return translateWithFallback("css", "powershell", code);
}

export const cssToPowerShellRules = rules;
