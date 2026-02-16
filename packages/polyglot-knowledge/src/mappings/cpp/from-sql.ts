import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("sql", "cpp");

export function sqlToCpp(code: string): TranslationResult {
  return translateWithFallback("sql", "cpp", code);
}

export const sqlToCppRules = rules;
