import { ConceptMappingRule, TranslationResult } from "../../types";
import { translateWithEngine } from "../../engine/translation-engine";

const rules: ConceptMappingRule[] = [
  {
    conceptId: "web.routing",
    from: "elixir",
    to: "typescript",
    steps: ["Map Phoenix LiveView to Next.js routes/components", "Translate Plug pipelines to Express middleware"]
  },
  {
    conceptId: "data.persistence.orm",
    from: "elixir",
    to: "typescript",
    steps: ["Translate Ecto schemas to Prisma or TypeORM models", "Map changesets to validation schemas"]
  },
  {
    conceptId: "concurrency.actor",
    from: "elixir",
    to: "typescript",
    steps: ["Translate GenServer to service classes", "Map supervision to process managers or queues"]
  },
  {
    conceptId: "paradigms.functional",
    from: "elixir",
    to: "typescript",
    steps: ["Translate Enum pipelines to array map/filter", "Use RxJS for stream pipelines"]
  }
];

export function elixirToTypeScript(code: string): TranslationResult {
  return translateWithEngine("elixir", "typescript", code);
}

export const elixirToTypeScriptRules = rules;
