import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("dockerfile", "zig");

export function dockerfileToZig(code: string): TranslationResult {
  return translateWithFallback("dockerfile", "zig", code);
}

export const dockerfileToZigRules = rules;
