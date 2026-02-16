import { ConceptMappingRule, TranslationResult } from "../../types";
import { translateWithEngine } from "../../engine/translation-engine";

const rules: ConceptMappingRule[] = [
  {
    conceptId: "web.routing",
    from: "python",
    to: "elixir",
    steps: ["Map FastAPI/Flask routes to Phoenix controllers and LiveView", "Translate ASGI middleware to Plug pipelines"]
  },
  {
    conceptId: "data.persistence.orm",
    from: "python",
    to: "elixir",
    steps: ["Translate SQLAlchemy/Django models to Ecto schemas", "Map validations to changesets"]
  },
  {
    conceptId: "concurrency.actor",
    from: "python",
    to: "elixir",
    steps: ["Translate asyncio classes to GenServer", "Map task groups to supervision trees"]
  },
  {
    conceptId: "paradigms.functional",
    from: "python",
    to: "elixir",
    steps: ["Translate list comprehensions to Enum pipelines", "Use Enum.reduce for folds"]
  }
];

export function pythonToElixir(code: string): TranslationResult {
  return translateWithEngine("python", "elixir", code);
}

export const pythonToElixirRules = rules;
