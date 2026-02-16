import { ConceptMappingRule, TranslationResult } from "../../types";
import { translateWithEngine } from "../../engine/translation-engine";

const rules: ConceptMappingRule[] = [
  {
    conceptId: "web.routing",
    from: "elixir",
    to: "python",
    steps: ["Map Phoenix routes/LiveView to FastAPI + HTMX handlers", "Translate Plug pipelines to ASGI middleware"]
  },
  {
    conceptId: "data.persistence.orm",
    from: "elixir",
    to: "python",
    steps: ["Translate Ecto schemas to SQLAlchemy or Django ORM models", "Map Ecto changesets to form/validation layers"]
  },
  {
    conceptId: "concurrency.actor",
    from: "elixir",
    to: "python",
    steps: ["Translate GenServer to asyncio service classes", "Map supervision trees to task groups and monitors"]
  },
  {
    conceptId: "paradigms.functional",
    from: "elixir",
    to: "python",
    steps: ["Translate Enum pipelines to list comprehensions or map/filter", "Use functools.reduce for folds"]
  }
];

export function elixirToPython(code: string): TranslationResult {
  return translateWithEngine("elixir", "python", code);
}

export const elixirToPythonRules = rules;
