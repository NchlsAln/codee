import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("powershell", "scala");

export function powershellToScala(code: string): TranslationResult {
  return translateWithFallback("powershell", "scala", code);
}

export const powershellToScalaRules = rules;
