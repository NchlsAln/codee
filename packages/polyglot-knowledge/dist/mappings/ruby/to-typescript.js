"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rubyToTypeScriptRules = void 0;
exports.rubyToTypeScript = rubyToTypeScript;
const translation_engine_1 = require("../../engine/translation-engine");
const rules = [
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
function rubyToTypeScript(code) {
    return (0, translation_engine_1.translateWithEngine)("ruby", "typescript", code);
}
exports.rubyToTypeScriptRules = rules;
