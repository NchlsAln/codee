import { ConceptMappingRule, TranslationResult } from "../../types";
import { translateWithEngine } from "../../engine/translation-engine";

const rules: ConceptMappingRule[] = [
  {
    conceptId: "web.routing",
    from: "erlang",
    to: "python",
    steps: ["Map Cowboy/Webmachine handlers to Flask/FastAPI routes", "Translate request/response tuples to Response objects"]
  },
  {
    conceptId: "data.persistence.orm",
    from: "erlang",
    to: "python",
    steps: ["Translate Mnesia tables to SQLite or SQLAlchemy models", "Map record storage to ORM models"]
  },
  {
    conceptId: "concurrency.patterns",
    from: "erlang",
    to: "python",
    steps: ["Map OTP supervisors to asyncio task groups", "Translate process links/monitors to task supervision"]
  },
  {
    conceptId: "paradigms.functional",
    from: "erlang",
    to: "python",
    steps: ["Translate list comprehensions to Python comprehensions", "Map lists:map/filter to map/filter"]
  }
];

export function erlangToPython(code: string): TranslationResult {
  return translateWithEngine("erlang", "python", code);
}

export const erlangToPythonRules = rules;
