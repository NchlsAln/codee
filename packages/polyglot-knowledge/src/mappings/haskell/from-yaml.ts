import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("yaml", "haskell");

export function yamlToHaskell(code: string): TranslationResult {
  return translateWithFallback("yaml", "haskell", code);
}

export const yamlToHaskellRules = rules;
