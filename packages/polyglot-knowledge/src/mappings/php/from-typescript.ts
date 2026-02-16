import { ConceptMappingRule, TranslationResult } from "../../types";
import { translateWithEngine } from "../../engine/translation-engine";

const rules: ConceptMappingRule[] = [
  {
    conceptId: "web.routing",
    from: "typescript",
    to: "php",
    steps: ["Map Express/Fastify routes to Laravel/Slim controllers", "Convert middleware chains to PHP middleware stacks"]
  },
  {
    conceptId: "data.persistence.orm",
    from: "typescript",
    to: "php",
    steps: ["Translate TypeORM/Prisma models to Eloquent models", "Map repository patterns to Eloquent query builder"]
  },
  {
    conceptId: "control-flow.async-await",
    from: "typescript",
    to: "php",
    steps: ["Translate Promises and async/await to ReactPHP/Swoole", "Convert async flows to callbacks or fibers"]
  },
  {
    conceptId: "paradigms.functional",
    from: "typescript",
    to: "php",
    steps: ["Translate array map/filter to array_map/array_filter", "Use array_reduce for reductions"]
  },
  {
    conceptId: "modules.packaging",
    from: "typescript",
    to: "php",
    steps: ["Translate ES modules to Composer autoloaded namespaces", "Map package.json deps to composer.json"]
  }
];

export function typeScriptToPhp(code: string): TranslationResult {
  return translateWithEngine("typescript", "php", code);
}

export const typeScriptToPhpRules = rules;
