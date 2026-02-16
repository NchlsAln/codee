import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("zig", "python");

export function zigToPython(code: string): TranslationResult {
  return translateWithFallback("zig", "python", code);
}

export const zigToPythonRules = rules;
