"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.elixirToCsharpRules = void 0;
exports.elixirToCsharp = elixirToCsharp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("elixir", "csharp");
function elixirToCsharp(code) {
    return (0, mapping_helpers_1.translateWithFallback)("elixir", "csharp", code);
}
exports.elixirToCsharpRules = rules;
