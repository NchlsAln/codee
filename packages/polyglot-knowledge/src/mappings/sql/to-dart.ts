import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("sql", "dart");

export function sqlToDart(code: string): TranslationResult {
  return translateWithFallback("sql", "dart", code);
}

export const sqlToDartRules = rules;
