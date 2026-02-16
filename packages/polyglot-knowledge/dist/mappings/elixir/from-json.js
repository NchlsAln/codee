"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonToElixirRules = void 0;
exports.jsonToElixir = jsonToElixir;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("json", "elixir");
function jsonToElixir(code) {
    return (0, mapping_helpers_1.translateWithFallback)("json", "elixir", code);
}
exports.jsonToElixirRules = rules;
