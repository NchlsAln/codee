import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("dockerfile", "powershell");

export function dockerfileToPowerShell(code: string): TranslationResult {
  return translateWithFallback("dockerfile", "powershell", code);
}

export const dockerfileToPowerShellRules = rules;
