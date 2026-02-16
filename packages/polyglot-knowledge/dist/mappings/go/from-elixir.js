"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.elixirToGoRules = void 0;
exports.elixirToGo = elixirToGo;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("elixir", "go");
function elixirToGo(code) {
    return (0, mapping_helpers_1.translateWithFallback)("elixir", "go", code);
}
exports.elixirToGoRules = rules;
