"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.elixirToScalaRules = void 0;
exports.elixirToScala = elixirToScala;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("elixir", "scala");
function elixirToScala(code) {
    return (0, mapping_helpers_1.translateWithFallback)("elixir", "scala", code);
}
exports.elixirToScalaRules = rules;
