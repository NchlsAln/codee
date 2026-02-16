import { ConceptMappingRule, TranslationResult } from "../../types";
import { buildDefaultRules, translateWithFallback } from "../shared/mapping-helpers";

const rules: ConceptMappingRule[] = buildDefaultRules("puppet", "xml");

export function puppetToXml(code: string): TranslationResult {
  return translateWithFallback("puppet", "xml", code);
}

export const puppetToXmlRules = rules;
