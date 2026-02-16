"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clojureToTypeScriptRules = void 0;
exports.clojureToTypeScript = clojureToTypeScript;
const translation_engine_1 = require("../../engine/translation-engine");
const rules = [
    {
        conceptId: "web.routing",
        from: "clojure",
        to: "typescript",
        steps: ["Map Ring/Compojure routes to Express/Fastify routes", "Translate middleware to Express middleware"]
    },
    {
        conceptId: "data.persistence.orm",
        from: "clojure",
        to: "typescript",
        steps: ["Translate next.jdbc/HoneySQL to Prisma or TypeORM", "Map SQL DSL to query builder patterns"]
    },
    {
        conceptId: "concurrency.channel",
        from: "clojure",
        to: "typescript",
        steps: ["Map core.async channels to RxJS Observables", "Translate go blocks to async functions"]
    },
    {
        conceptId: "paradigms.functional",
        from: "clojure",
        to: "typescript",
        steps: ["Translate map/filter/reduce to array map/filter/reduce", "Use RxJS for stream pipelines"]
    }
];
function clojureToTypeScript(code) {
    return (0, translation_engine_1.translateWithEngine)("clojure", "typescript", code);
}
exports.clojureToTypeScriptRules = rules;
