import { ConceptMappingRule, TranslationResult } from "../../types";
import { translateWithEngine } from "../../engine/translation-engine";

const rules: ConceptMappingRule[] = [
  {
    conceptId: "web.routing",
    from: "erlang",
    to: "typescript",
    steps: ["Map Cowboy/Webmachine handlers to Express/Fastify routes", "Translate request/response tuples to Reply objects"]
  },
  {
    conceptId: "data.persistence.orm",
    from: "erlang",
    to: "typescript",
    steps: ["Translate Mnesia tables to PostgreSQL via Prisma/TypeORM", "Map record storage to ORM models"]
  },
  {
    conceptId: "concurrency.patterns",
    from: "erlang",
    to: "typescript",
    steps: ["Map OTP supervisors to PM2 or queue supervisors", "Translate process links to worker lifecycle management"]
  },
  {
    conceptId: "paradigms.functional",
    from: "erlang",
    to: "typescript",
    steps: ["Translate list comprehensions to array map/filter", "Map lists:map/filter to array operations"]
  }
];

export function erlangToTypeScript(code: string): TranslationResult {
  return translateWithEngine("erlang", "typescript", code);
}

export const erlangToTypeScriptRules = rules;
