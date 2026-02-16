import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("scss", "powershell");

export function scssToPowerShell(code: string): TranslationResult {
  return translateWithFallback("scss", "powershell", code);
}

export const scssToPowerShellRules = rules;
