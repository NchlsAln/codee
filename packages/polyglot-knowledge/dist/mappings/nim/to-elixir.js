"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nimToElixirRules = void 0;
exports.nimToElixir = nimToElixir;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("nim", "elixir");
function nimToElixir(code) {
    return (0, mapping_helpers_1.translateWithFallback)("nim", "elixir", code);
}
exports.nimToElixirRules = rules;
