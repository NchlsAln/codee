import { ConceptMappingRule, TranslationResult } from "../../types";
import { translateWithEngine } from "../../engine/translation-engine";

const rules: ConceptMappingRule[] = [
  {
    conceptId: "web.routing",
    from: "ruby",
    to: "typescript",
    steps: ["Map Rails controllers to Express/Fastify routes", "Translate Sinatra routes to Express handlers"]
  },
  {
    conceptId: "data.persistence.orm",
    from: "ruby",
    to: "typescript",
    steps: ["Translate ActiveRecord models to Prisma or TypeORM", "Map scopes to query builder patterns"]
  },
  {
    conceptId: "control-flow.async-await",
    from: "ruby",
    to: "typescript",
    steps: ["Translate Ruby async flows to Promises and async/await", "Convert blocks to callbacks or async functions"]
  },
  {
    conceptId: "paradigms.functional",
    from: "ruby",
    to: "typescript",
    steps: ["Translate map/select/reduce to array map/filter/reduce", "Use RxJS for stream pipelines"]
  },
  {
    conceptId: "paradigms.closures",
    from: "ruby",
    to: "typescript",
    steps: ["Translate blocks/yield to callbacks", "Use arrow functions for closures"]
  }
];

export function rubyToTypeScript(code: string): TranslationResult {
  return translateWithEngine("ruby", "typescript", code);
}

export const rubyToTypeScriptRules = rules;
