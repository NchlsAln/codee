import { ConceptMappingRule, TranslationResult } from "../../types";
import { translateWithEngine } from "../../engine/translation-engine";

const rules: ConceptMappingRule[] = [
  {
    conceptId: "web.routing",
    from: "python",
    to: "erlang",
    steps: ["Map Flask/FastAPI routes to Cowboy/Webmachine handlers", "Translate ASGI middleware to handler pipelines"]
  },
  {
    conceptId: "data.persistence.orm",
    from: "python",
    to: "erlang",
    steps: ["Translate SQLAlchemy/Django models to Mnesia tables", "Map ORM models to records"]
  },
  {
    conceptId: "concurrency.patterns",
    from: "python",
    to: "erlang",
    steps: ["Map asyncio task groups to OTP supervisors", "Translate queues to process mailboxes"]
  },
  {
    conceptId: "paradigms.functional",
    from: "python",
    to: "erlang",
    steps: ["Translate list comprehensions to Erlang list comprehensions", "Map map/filter to lists:map/filter"]
  }
];

export function pythonToErlang(code: string): TranslationResult {
  return translateWithEngine("python", "erlang", code);
}

export const pythonToErlangRules = rules;
