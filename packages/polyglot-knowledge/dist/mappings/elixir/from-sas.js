"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sasToElixirRules = void 0;
exports.sasToElixir = sasToElixir;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("sas", "elixir");
function sasToElixir(code) {
    return (0, mapping_helpers_1.translateWithFallback)("sas", "elixir", code);
}
exports.sasToElixirRules = rules;
