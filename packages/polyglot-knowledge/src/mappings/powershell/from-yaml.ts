import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("yaml", "powershell");

export function yamlToPowerShell(code: string): TranslationResult {
  return translateWithFallback("yaml", "powershell", code);
}

export const yamlToPowerShellRules = rules;
