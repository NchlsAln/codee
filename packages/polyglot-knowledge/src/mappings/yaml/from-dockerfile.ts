import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("dockerfile", "yaml");

export function dockerfileToYaml(code: string): TranslationResult {
  return translateWithFallback("dockerfile", "yaml", code);
}

export const dockerfileToYamlRules = rules;
