import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("chef", "yaml");

export function chefToYaml(code: string): TranslationResult {
  return translateWithFallback("chef", "yaml", code);
}

export const chefToYamlRules = rules;
