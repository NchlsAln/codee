"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.elixirToRustRules = void 0;
exports.elixirToRust = elixirToRust;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("elixir", "rust");
function elixirToRust(code) {
    return (0, mapping_helpers_1.translateWithFallback)("elixir", "rust", code);
}
exports.elixirToRustRules = rules;
