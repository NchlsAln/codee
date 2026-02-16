import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("dockerfile", "xml");

export function dockerfileToXml(code: string): TranslationResult {
  return translateWithFallback("dockerfile", "xml", code);
}

export const dockerfileToXmlRules = rules;
