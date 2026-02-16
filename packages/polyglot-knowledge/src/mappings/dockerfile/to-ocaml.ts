import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("dockerfile", "ocaml");

export function dockerfileToOcaml(code: string): TranslationResult {
  return translateWithFallback("dockerfile", "ocaml", code);
}

export const dockerfileToOcamlRules = rules;
