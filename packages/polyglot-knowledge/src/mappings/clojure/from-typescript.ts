import { ConceptMappingRule, TranslationResult } from "../../types";
import { translateWithEngine } from "../../engine/translation-engine";

const rules: ConceptMappingRule[] = [
  {
    conceptId: "web.routing",
    from: "typescript",
    to: "clojure",
    steps: ["Map Express/Fastify routes to Ring/Compojure routes", "Translate middleware to Ring middleware"]
  },
  {
    conceptId: "data.persistence.orm",
    from: "typescript",
    to: "clojure",
    steps: ["Translate Prisma/TypeORM to next.jdbc/HoneySQL", "Map repository patterns to SQL DSL functions"]
  },
  {
    conceptId: "concurrency.channel",
    from: "typescript",
    to: "clojure",
    steps: ["Map Promises/Observables to core.async channels", "Translate async/await to go blocks"]
  },
  {
    conceptId: "paradigms.functional",
    from: "typescript",
    to: "clojure",
    steps: ["Translate array map/filter/reduce to map/filter/reduce", "Use threading macros for pipelines"]
  }
];

export function typeScriptToClojure(code: string): TranslationResult {
  return translateWithEngine("typescript", "clojure", code);
}

export const typeScriptToClojureRules = rules;
