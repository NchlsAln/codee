import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("puppet", "powershell");

export function puppetToPowerShell(code: string): TranslationResult {
  return translateWithFallback("puppet", "powershell", code);
}

export const puppetToPowerShellRules = rules;
