import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("ansible", "xml");

export function ansibleToXml(code: string): TranslationResult {
  return translateWithFallback("ansible", "xml", code);
}

export const ansibleToXmlRules = rules;
