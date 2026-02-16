"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pythonToPhpRules = void 0;
exports.pythonToPhp = pythonToPhp;
const translation_engine_1 = require("../../engine/translation-engine");
const rules = [
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
function pythonToPhp(code) {
    return (0, translation_engine_1.translateWithEngine)("python", "php", code);
}
exports.pythonToPhpRules = rules;
