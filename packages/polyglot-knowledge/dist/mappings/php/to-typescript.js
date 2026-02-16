"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.phpToTypeScriptRules = void 0;
exports.phpToTypeScript = phpToTypeScript;
const translation_engine_1 = require("../../engine/translation-engine");
const rules = [
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
function phpToTypeScript(code) {
    return (0, translation_engine_1.translateWithEngine)("php", "typescript", code);
}
exports.phpToTypeScriptRules = rules;
