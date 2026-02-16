import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("powershell", "elixir");

export function powershellToElixir(code: string): TranslationResult {
  return translateWithFallback("powershell", "elixir", code);
}

export const powershellToElixirRules = rules;
