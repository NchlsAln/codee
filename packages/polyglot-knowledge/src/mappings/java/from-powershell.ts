import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("powershell", "java");

export function powershellToJava(code: string): TranslationResult {
  return translateWithFallback("powershell", "java", code);
}

export const powershellToJavaRules = rules;
