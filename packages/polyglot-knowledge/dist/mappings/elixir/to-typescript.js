"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.elixirToTypeScriptRules = void 0;
exports.elixirToTypeScript = elixirToTypeScript;
const translation_engine_1 = require("../../engine/translation-engine");
const rules = [
    {
        conceptId: "web.routing",
        from: "elixir",
        to: "typescript",
        steps: ["Map Phoenix LiveView to Next.js routes/components", "Translate Plug pipelines to Express middleware"]
    },
    {
        conceptId: "data.persistence.orm",
        from: "elixir",
        to: "typescript",
        steps: ["Translate Ecto schemas to Prisma or TypeORM models", "Map changesets to validation schemas"]
    },
    {
        conceptId: "concurrency.actor",
        from: "elixir",
        to: "typescript",
        steps: ["Translate GenServer to service classes", "Map supervision to process managers or queues"]
    },
    {
        conceptId: "paradigms.functional",
        from: "elixir",
        to: "typescript",
        steps: ["Translate Enum pipelines to array map/filter", "Use RxJS for stream pipelines"]
    }
];
function elixirToTypeScript(code) {
    return (0, translation_engine_1.translateWithEngine)("elixir", "typescript", code);
}
exports.elixirToTypeScriptRules = rules;
