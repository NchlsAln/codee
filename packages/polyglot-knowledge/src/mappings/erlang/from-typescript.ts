import { ConceptMappingRule, TranslationResult } from "../../types";
import { translateWithEngine } from "../../engine/translation-engine";

const rules: ConceptMappingRule[] = [
  {
    conceptId: "web.routing",
    from: "typescript",
    to: "erlang",
    steps: ["Map Express/Fastify routes to Cowboy/Webmachine handlers", "Translate middleware chains to handler pipelines"]
  },
  {
    conceptId: "data.persistence.orm",
    from: "typescript",
    to: "erlang",
    steps: ["Translate Prisma/TypeORM models to Mnesia tables", "Map entities to records"]
  },
  {
    conceptId: "concurrency.patterns",
    from: "typescript",
    to: "erlang",
    steps: ["Map PM2/worker pools to OTP supervisors", "Translate Promise queues to process mailboxes"]
  },
  {
    conceptId: "paradigms.functional",
    from: "typescript",
    to: "erlang",
    steps: ["Translate array map/filter to lists:map/filter", "Use list comprehensions for transforms"]
  }
];

export function typeScriptToErlang(code: string): TranslationResult {
  return translateWithEngine("typescript", "erlang", code);
}

export const typeScriptToErlangRules = rules;
