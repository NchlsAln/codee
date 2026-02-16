"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pythonToRubyRules = void 0;
exports.pythonToRuby = pythonToRuby;
const translation_engine_1 = require("../../engine/translation-engine");
const rules = [
    {
        conceptId: "web.routing",
        from: "python",
        to: "ruby",
        steps: ["Map Flask/FastAPI decorators to Rails routes/controllers", "Translate FastAPI routers to Sinatra-style routes"]
    },
    {
        conceptId: "data.persistence.orm",
        from: "python",
        to: "ruby",
        steps: ["Translate SQLAlchemy/Django models to ActiveRecord", "Map query filters to scopes"]
    },
    {
        conceptId: "control-flow.async-await",
        from: "python",
        to: "ruby",
        steps: ["Translate asyncio to Ruby async libraries", "Convert async functions to blocks or futures"]
    },
    {
        conceptId: "paradigms.functional",
        from: "python",
        to: "ruby",
        steps: ["Translate list comprehensions to map/select", "Use reduce for folds"]
    },
    {
        conceptId: "paradigms.closures",
        from: "python",
        to: "ruby",
        steps: ["Translate context managers to blocks/yield", "Use procs/lambdas for callbacks"]
    }
];
function pythonToRuby(code) {
    return (0, translation_engine_1.translateWithEngine)("python", "ruby", code);
}
exports.pythonToRubyRules = rules;
