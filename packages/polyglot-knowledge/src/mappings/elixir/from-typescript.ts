import { ConceptMappingRule, TranslationResult } from "../../types";
import { translateWithEngine } from "../../engine/translation-engine";

const rules: ConceptMappingRule[] = [
  {
    conceptId: "web.routing",
    from: "typescript",
    to: "elixir",
    steps: ["Map Express/Fastify routes to Phoenix controllers", "Translate middleware to Plug pipelines"]
  },
  {
    conceptId: "data.persistence.orm",
    from: "typescript",
    to: "elixir",
    steps: ["Translate Prisma/TypeORM models to Ecto schemas", "Map validations to changesets"]
  },
  {
    conceptId: "concurrency.actor",
    from: "typescript",
    to: "elixir",
    steps: ["Translate services to GenServer", "Map process managers to supervision trees"]
  },
  {
    conceptId: "paradigms.functional",
    from: "typescript",
    to: "elixir",
    steps: ["Translate array map/filter to Enum pipelines", "Use Enum.reduce for folds"]
  }
];

export function typeScriptToElixir(code: string): TranslationResult {
  return translateWithEngine("typescript", "elixir", code);
}

export const typeScriptToElixirRules = rules;
