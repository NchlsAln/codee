import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("powershell", "ocaml");

export function powershellToOcaml(code: string): TranslationResult {
  return translateWithFallback("powershell", "ocaml", code);
}

export const powershellToOcamlRules = rules;
