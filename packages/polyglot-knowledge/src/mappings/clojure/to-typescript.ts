import { ConceptMappingRule, TranslationResult } from "../../types";
import { translateWithEngine } from "../../engine/translation-engine";

const rules: ConceptMappingRule[] = [
  {
    conceptId: "web.routing",
    from: "clojure",
    to: "typescript",
    steps: ["Map Ring/Compojure routes to Express/Fastify routes", "Translate middleware to Express middleware"]
  },
  {
    conceptId: "data.persistence.orm",
    from: "clojure",
    to: "typescript",
    steps: ["Translate next.jdbc/HoneySQL to Prisma or TypeORM", "Map SQL DSL to query builder patterns"]
  },
  {
    conceptId: "concurrency.channel",
    from: "clojure",
    to: "typescript",
    steps: ["Map core.async channels to RxJS Observables", "Translate go blocks to async functions"]
  },
  {
    conceptId: "paradigms.functional",
    from: "clojure",
    to: "typescript",
    steps: ["Translate map/filter/reduce to array map/filter/reduce", "Use RxJS for stream pipelines"]
  }
];

export function clojureToTypeScript(code: string): TranslationResult {
  return translateWithEngine("clojure", "typescript", code);
}

export const clojureToTypeScriptRules = rules;
