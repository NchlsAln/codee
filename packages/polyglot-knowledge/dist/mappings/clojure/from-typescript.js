"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeScriptToClojureRules = void 0;
exports.typeScriptToClojure = typeScriptToClojure;
const translation_engine_1 = require("../../engine/translation-engine");
const rules = [
    {
        conceptId: "web.routing",
        from: "typescript",
        to: "clojure",
        steps: ["Map Express/Fastify routes to Ring/Compojure routes", "Translate middleware to Ring middleware"]
    },
    {
        conceptId: "data.persistence.orm",
        from: "typescript",
        to: "clojure",
        steps: ["Translate Prisma/TypeORM to next.jdbc/HoneySQL", "Map repository patterns to SQL DSL functions"]
    },
    {
        conceptId: "concurrency.channel",
        from: "typescript",
        to: "clojure",
        steps: ["Map Promises/Observables to core.async channels", "Translate async/await to go blocks"]
    },
    {
        conceptId: "paradigms.functional",
        from: "typescript",
        to: "clojure",
        steps: ["Translate array map/filter/reduce to map/filter/reduce", "Use threading macros for pipelines"]
    }
];
function typeScriptToClojure(code) {
    return (0, translation_engine_1.translateWithEngine)("typescript", "clojure", code);
}
exports.typeScriptToClojureRules = rules;
