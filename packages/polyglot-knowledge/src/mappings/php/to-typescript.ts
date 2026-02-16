import { ConceptMappingRule, TranslationResult } from "../../types";
import { translateWithEngine } from "../../engine/translation-engine";

const rules: ConceptMappingRule[] = [
  {
    conceptId: "web.routing",
    from: "php",
    to: "typescript",
    steps: ["Map Laravel/Symfony controllers to Express/Fastify routes", "Convert middleware to Express/Fastify middleware"]
  },
  {
    conceptId: "data.persistence.orm",
    from: "php",
    to: "typescript",
    steps: ["Translate Eloquent models to TypeORM or Prisma models", "Map query builder chains to repository/query builder patterns"]
  },
  {
    conceptId: "control-flow.async-await",
    from: "php",
    to: "typescript",
    steps: ["Translate async libraries to Promises and async/await", "Convert callbacks to Promise-based flows"]
  },
  {
    conceptId: "paradigms.functional",
    from: "php",
    to: "typescript",
    steps: ["Translate array_map/array_filter to array map/filter", "Use reduce for folds; RxJS for streams"]
  },
  {
    conceptId: "modules.packaging",
    from: "php",
    to: "typescript",
    steps: ["Translate Composer autoloading to ES module imports", "Map composer.json deps to package.json"]
  }
];

export function phpToTypeScript(code: string): TranslationResult {
  return translateWithEngine("php", "typescript", code);
}

export const phpToTypeScriptRules = rules;
