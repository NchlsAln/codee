import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("python", "cpp");

export function pythonToCpp(code: string): TranslationResult {
  return translateWithFallback("python", "cpp", code);
}

export const pythonToCppRules = rules;
