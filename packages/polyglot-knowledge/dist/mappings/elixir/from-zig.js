"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zigToElixirRules = void 0;
exports.zigToElixir = zigToElixir;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("zig", "elixir");
function zigToElixir(code) {
    return (0, mapping_helpers_1.translateWithFallback)("zig", "elixir", code);
}
exports.zigToElixirRules = rules;
