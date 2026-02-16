import { ConceptMappingRule, TranslationResult } from "../../types";
import { translateWithEngine } from "../../engine/translation-engine";

const rules: ConceptMappingRule[] = [
  {
    conceptId: "web.routing",
    from: "clojure",
    to: "python",
    steps: ["Map Ring/Compojure routes to Flask/FastAPI route decorators", "Translate middleware to WSGI/ASGI layers"]
  },
  {
    conceptId: "data.persistence.orm",
    from: "clojure",
    to: "python",
    steps: ["Translate next.jdbc/HoneySQL to SQLAlchemy or Django ORM", "Map SQL DSL to ORM query builders"]
  },
  {
    conceptId: "concurrency.channel",
    from: "clojure",
    to: "python",
    steps: ["Map core.async channels to asyncio queues", "Translate go blocks to async tasks"]
  },
  {
    conceptId: "paradigms.functional",
    from: "clojure",
    to: "python",
    steps: ["Translate map/filter/reduce to comprehensions or map/filter", "Use functools.reduce for folds"]
  }
];

export function clojureToPython(code: string): TranslationResult {
  return translateWithEngine("clojure", "python", code);
}

export const clojureToPythonRules = rules;
