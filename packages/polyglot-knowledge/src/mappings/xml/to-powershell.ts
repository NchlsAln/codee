import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("xml", "powershell");

export function xmlToPowerShell(code: string): TranslationResult {
  return translateWithFallback("xml", "powershell", code);
}

export const xmlToPowerShellRules = rules;
