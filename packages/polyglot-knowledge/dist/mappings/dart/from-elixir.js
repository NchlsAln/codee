"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.elixirToDartRules = void 0;
exports.elixirToDart = elixirToDart;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("elixir", "dart");
function elixirToDart(code) {
    return (0, mapping_helpers_1.translateWithFallback)("elixir", "dart", code);
}
exports.elixirToDartRules = rules;
