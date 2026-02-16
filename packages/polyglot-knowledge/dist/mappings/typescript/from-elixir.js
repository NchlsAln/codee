"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.elixirToTypeScriptRules = void 0;
exports.elixirToTypeScript = elixirToTypeScript;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("elixir", "typescript");
function elixirToTypeScript(code) {
    return (0, mapping_helpers_1.translateWithFallback)("elixir", "typescript", code);
}
exports.elixirToTypeScriptRules = rules;
