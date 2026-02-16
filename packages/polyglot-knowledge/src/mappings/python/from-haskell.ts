import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("haskell", "python");

export function haskellToPython(code: string): TranslationResult {
  return translateWithFallback("haskell", "python", code);
}

export const haskellToPythonRules = rules;
