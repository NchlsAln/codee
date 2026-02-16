"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xmlToElixirRules = void 0;
exports.xmlToElixir = xmlToElixir;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("xml", "elixir");
function xmlToElixir(code) {
    return (0, mapping_helpers_1.translateWithFallback)("xml", "elixir", code);
}
exports.xmlToElixirRules = rules;
