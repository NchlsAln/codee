import { ConceptMappingRule, TranslationResult } from "../../types";
import { translateWithEngine } from "../../engine/translation-engine";

const rules: ConceptMappingRule[] = [
  {
    conceptId: "web.routing",
    from: "python",
    to: "php",
    steps: ["Map Flask/FastAPI route decorators to Laravel/Slim routes", "Convert ASGI middleware to PHP middleware stacks"]
  },
  {
    conceptId: "data.persistence.orm",
    from: "python",
    to: "php",
    steps: ["Translate SQLAlchemy/Django models to Eloquent models", "Map query filters to Eloquent query builder"]
  },
  {
    conceptId: "control-flow.async-await",
    from: "python",
    to: "php",
    steps: ["Translate asyncio flows to ReactPHP/Swoole", "Convert await to promise-like callbacks or fibers"]
  },
  {
    conceptId: "paradigms.functional",
    from: "python",
    to: "php",
    steps: ["Translate list comprehensions to array_map/array_filter", "Use array_reduce for reductions"]
  },
  {
    conceptId: "modules.packaging",
    from: "python",
    to: "php",
    steps: ["Translate Python imports to Composer autoloaded namespaces", "Map requirements/pyproject deps to composer.json"]
  }
];

export function pythonToPhp(code: string): TranslationResult {
  return translateWithEngine("python", "php", code);
}

export const pythonToPhpRules = rules;
