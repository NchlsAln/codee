"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.phpToPythonRules = void 0;
exports.phpToPython = phpToPython;
const translation_engine_1 = require("../../engine/translation-engine");
const rules = [
    {
        conceptId: "web.routing",
        from: "php",
        to: "python",
        steps: ["Map Laravel/Symfony controllers to Flask/FastAPI route decorators", "Convert middleware to WSGI/ASGI middleware layers"]
    },
    {
        conceptId: "data.persistence.orm",
        from: "php",
        to: "python",
        steps: ["Translate Eloquent models to Django ORM or SQLAlchemy models", "Map query builder chains to QuerySet/SQLAlchemy filters"]
    },
    {
        conceptId: "control-flow.async-await",
        from: "php",
        to: "python",
        steps: ["Map ReactPHP/Swoole async APIs to asyncio", "Convert callbacks to async/await coroutines"]
    },
    {
        conceptId: "paradigms.functional",
        from: "php",
        to: "python",
        steps: ["Translate array_map/array_filter to list comprehensions or map/filter", "Use functools.reduce for reductions"]
    },
    {
        conceptId: "modules.packaging",
        from: "php",
        to: "python",
        steps: ["Translate Composer autoloading to explicit imports and package layout", "Map composer.json deps to requirements.txt or pyproject.toml"]
    }
];
function phpToPython(code) {
    return (0, translation_engine_1.translateWithEngine)("php", "python", code);
}
exports.phpToPythonRules = rules;
