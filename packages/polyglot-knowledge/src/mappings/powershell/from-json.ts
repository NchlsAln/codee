import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("json", "powershell");

export function jsonToPowerShell(code: string): TranslationResult {
  return translateWithFallback("json", "powershell", code);
}

export const jsonToPowerShellRules = rules;
