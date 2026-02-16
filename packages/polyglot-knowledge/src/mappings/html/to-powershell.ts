import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("html", "powershell");

export function htmlToPowerShell(code: string): TranslationResult {
  return translateWithFallback("html", "powershell", code);
}

export const htmlToPowerShellRules = rules;
